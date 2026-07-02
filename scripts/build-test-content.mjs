// Builds api/_data/test-content.json — a static manifest of question text,
// options, and correct answers keyed by test_id and question_id, so the
// teacher progress API can show what a question actually asked without
// executing any of the (browser-only) test page scripts at request time.
//
// Run with: npm run build:test-content
// Re-run whenever a test's sampleQuestions array changes.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');
const OUT_FILE   = join(__dirname, '..', 'api', '_data', 'test-content.json');
const SUBJECT_DIRS = ['math', 'reading', 'science'];

function escapeRe(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Question text/options/explanations reference images with a path that is
// relative to the test's own directory (e.g. "images/question_13.png"), and
// that directory layout itself varies: math/reading tests each live in their
// own nested folder, while science tests share one flat folder per subject.
// Filenames also aren't always consistent with what's actually on disk —
// some legacy tests reference "31.png" when the real asset is split into
// "31a.png"/"31b.png"/... or "20-1.png"/"20-2.png". Resolve the real file(s)
// against the directory listing so the same markup renders correctly no
// matter which page (including the teacher insights modal) embeds it.
function resolveImageFiles(imgDir, filename) {
  let entries;
  try {
    entries = readdirSync(imgDir);
  } catch {
    return { type: 'missing' };
  }

  if (entries.includes(filename)) return { type: 'single', files: [filename] };

  const lowerMap = new Map(entries.map((e) => [e.toLowerCase(), e]));
  const exactLower = lowerMap.get(filename.toLowerCase());
  if (exactLower) return { type: 'single', files: [exactLower] };

  const dot  = filename.lastIndexOf('.');
  const base = dot === -1 ? filename : filename.slice(0, dot);
  const ext  = dot === -1 ? '' : filename.slice(dot);

  // Lettered sub-parts of one scanned image: base + a/b/c/... + ext
  const lettered = entries
    .filter((e) => new RegExp(`^${escapeRe(base)}[a-z]${escapeRe(ext)}$`, 'i').test(e))
    .sort();
  if (lettered.length) return { type: 'multi', files: lettered };

  // Hyphen-numbered parts: base + "-" + N + ext
  const hyphenated = entries
    .filter((e) => new RegExp(`^${escapeRe(base)}-\\d+${escapeRe(ext)}$`, 'i').test(e))
    .sort((a, b) => {
      const na = Number(/-(\d+)/.exec(a)[1]);
      const nb = Number(/-(\d+)/.exec(b)[1]);
      return na - nb;
    });
  if (hyphenated.length) return { type: 'multi', files: hyphenated };

  // Same base name, different extension.
  const sameBase = entries.filter((e) => e.toLowerCase().startsWith(`${base.toLowerCase()}.`));
  if (sameBase.length === 1) return { type: 'single', files: [sameBase[0]] };

  return { type: 'missing' };
}

// Some questions/options carry an image as a {url, alt} object instead of
// an embedded <img> tag (e.g. image-based multiple-choice options, or a
// question's standalone `image` field). Resolve and rewrite `url` the same
// way as embedded <img src> references.
function fixImageObject(obj, imgDir, imgUrlBase) {
  if (!obj || typeof obj.url !== 'string' || !obj.url.startsWith('images/')) return obj;
  const filename = obj.url.slice('images/'.length);
  const resolved = resolveImageFiles(imgDir, filename);
  if (resolved.type === 'missing') {
    return { ...obj, url: null, missing: true };
  }
  // {url, alt} only has room for one image; multi-part files fall back to the first part.
  return { ...obj, url: `${imgUrlBase}/${resolved.files[0]}` };
}

// Rewrites every `<img src="images/...">` in an HTML string to an absolute,
// site-rooted path (resolved against the real files on disk), so it loads
// correctly regardless of which page renders the markup. Images that can't
// be located at all are swapped for a small text fallback instead of a
// broken-image icon.
function rewriteImages(html, imgDir, imgUrlBase) {
  if (typeof html !== 'string' || !html.includes('<img')) return html;
  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    const srcMatch = /src\s*=\s*["']images\/([^"']+)["']/i.exec(tag);
    if (!srcMatch) return tag;

    const resolved = resolveImageFiles(imgDir, srcMatch[1]);
    if (resolved.type === 'missing') {
      return `<span class="missing-image-note">[Image unavailable: ${srcMatch[1]}]</span>`;
    }
    return resolved.files
      .map((file) => tag.replace(srcMatch[0], `src="${imgUrlBase}/${file}"`))
      .join('');
  });
}

function findTestFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (entry === 'images') continue;
      out.push(...findTestFiles(full));
    } else if (entry.endsWith('.js')) {
      out.push(full);
    }
  }
  return out;
}

// Extracts the source text of a top-level `const <name> = [ ... ];` array
// literal, tracking string/template-literal boundaries (including `${}`
// interpolation) so brackets inside question text never throw off the count.
function extractArrayLiteral(source, varName) {
  const declRe = new RegExp(`(?:const|let|var)\\s+${varName}\\s*=\\s*\\[`);
  const match = declRe.exec(source);
  if (!match) return null;

  const startIdx = match.index + match[0].length - 1; // index of the '['
  const stack = ['code'];
  const templateBraceDepths = [];
  let depth = 0;

  for (let i = startIdx; i < source.length; i++) {
    const ch = source[i];
    const ctx = stack[stack.length - 1];

    if (ctx === 'code') {
      if (ch === '/' && source[i + 1] === '/') {
        const nl = source.indexOf('\n', i);
        i = nl === -1 ? source.length : nl;
        continue;
      }
      if (ch === '/' && source[i + 1] === '*') {
        const end = source.indexOf('*/', i + 2);
        i = end === -1 ? source.length : end + 1;
        continue;
      }
      if (ch === "'") { stack.push('squote'); continue; }
      if (ch === '"') { stack.push('dquote'); continue; }
      if (ch === '`') { stack.push('template'); continue; }
      if (ch === '[' || ch === '{' || ch === '(') { depth++; continue; }
      if (ch === ')') { depth--; continue; }
      if (ch === '}') {
        depth--;
        if (templateBraceDepths.length && depth === templateBraceDepths[templateBraceDepths.length - 1]) {
          templateBraceDepths.pop();
          stack.pop(); // exit `${ }` interpolation, back to template mode
        }
        continue;
      }
      if (ch === ']') {
        depth--;
        if (depth === 0) return source.slice(startIdx, i + 1);
        continue;
      }
      continue;
    }

    if (ctx === 'squote' || ctx === 'dquote') {
      if (ch === '\\') { i++; continue; }
      if ((ctx === 'squote' && ch === "'") || (ctx === 'dquote' && ch === '"')) stack.pop();
      continue;
    }

    if (ctx === 'template') {
      if (ch === '\\') { i++; continue; }
      if (ch === '`') { stack.pop(); continue; }
      if (ch === '$' && source[i + 1] === '{') {
        stack.push('code');
        templateBraceDepths.push(depth);
        depth++;
        i++;
        continue;
      }
      continue;
    }
  }

  throw new Error(`Unbalanced ${varName} array literal`);
}

function buildManifest() {
  const manifest = {};
  const skipped = [];

  for (const subject of SUBJECT_DIRS) {
    const dir = join(PUBLIC_DIR, subject);
    for (const file of findTestFiles(dir)) {
      const source = readFileSync(file, 'utf8');

      const idMatch = /window\.TEST_IDENTIFIER\s*=\s*['"]([^'"]+)['"]/.exec(source);
      if (!idMatch) { skipped.push([file, 'no TEST_IDENTIFIER']); continue; }
      const testId = idMatch[1];

      const arrayText = extractArrayLiteral(source, 'sampleQuestions');
      if (!arrayText) { skipped.push([file, 'no sampleQuestions array']); continue; }

      let questions;
      try {
        questions = vm.runInNewContext(`(${arrayText})`, {}, { timeout: 5000 });
      } catch (err) {
        skipped.push([file, `parse error: ${err.message}`]);
        continue;
      }

      const testDir    = dirname(file);
      const imgDir      = join(testDir, 'images');
      const imgUrlBase  = `/${relative(PUBLIC_DIR, testDir).split('\\').join('/')}/images`;
      const fixImages   = (val) => rewriteImages(val, imgDir, imgUrlBase);
      // Options are either an HTML string (possibly with an embedded <img>)
      // or an {url, alt} image object — resolve each shape accordingly.
      const fixOption   = (opt) =>
        (opt && typeof opt === 'object') ? fixImageObject(opt, imgDir, imgUrlBase) : fixImages(opt);

      const byId = {};
      for (const q of questions) {
        if (!q || q.id == null) continue;
        byId[String(q.id)] = {
          text:            fixImages(q.text ?? null),
          type:            q.type ?? null,
          image:           fixImageObject(q.image ?? null, imgDir, imgUrlBase),
          options:         Array.isArray(q.options) ? q.options.map(fixOption) : (q.options ?? null),
          correctAnswer:   q.correctAnswer ?? null,
          dropZones:       q.dropZones ?? null,
          correctKeywords: q.correctKeywords ?? null,
          explanation:     fixImages(q.explanation ?? null),
        };
      }
      manifest[testId] = byId;
    }
  }

  writeFileSync(OUT_FILE, JSON.stringify(manifest, null, 2));
  console.log(`Wrote ${Object.keys(manifest).length} tests to ${OUT_FILE}`);
  if (skipped.length) {
    console.log(`Skipped ${skipped.length} file(s):`);
    for (const [file, reason] of skipped) console.log(`  ${file}: ${reason}`);
  }
}

buildManifest();

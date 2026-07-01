// Builds api/_data/test-content.json — a static manifest of question text,
// options, and correct answers keyed by test_id and question_id, so the
// teacher progress API can show what a question actually asked without
// executing any of the (browser-only) test page scripts at request time.
//
// Run with: npm run build:test-content
// Re-run whenever a test's sampleQuestions array changes.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');
const OUT_FILE   = join(__dirname, '..', 'api', '_data', 'test-content.json');
const SUBJECT_DIRS = ['math', 'reading', 'science'];

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

      const byId = {};
      for (const q of questions) {
        if (!q || q.id == null) continue;
        byId[String(q.id)] = {
          text:            q.text ?? null,
          type:            q.type ?? null,
          options:         q.options ?? null,
          correctAnswer:   q.correctAnswer ?? null,
          dropZones:       q.dropZones ?? null,
          correctKeywords: q.correctKeywords ?? null,
          explanation:     q.explanation ?? null,
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

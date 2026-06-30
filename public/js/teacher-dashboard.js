/* teacher-dashboard.js — class list and create class */
'use strict';

let classes = [];

// ── Boot ──────────────────────────────────────────────────────────────────────

(async function boot() {
  await requireAuth();
  await loadClasses();
})();

// ── Load classes ──────────────────────────────────────────────────────────────

async function loadClasses() {
  const loading  = document.getElementById('loading-state');
  const empty    = document.getElementById('empty-state');
  const grid     = document.getElementById('classes-grid');
  try {
    const res = await fetch('/api/classes', { credentials: 'include' });
    if (res.status === 401) { window.location.href = '/teacher/login.html'; return; }
    if (!res.ok) throw new Error('fetch failed');
    classes = await res.json();
    loading.style.display = 'none';
    if (!classes.length) {
      empty.style.display = 'block';
      grid.style.display  = 'none';
    } else {
      empty.style.display = 'none';
      grid.style.display  = 'grid';
      renderClasses();
    }
  } catch {
    loading.style.display = 'none';
    showDashAlert('Could not load classes. Please refresh the page.', 'error');
  }
}

function renderClasses() {
  const grid = document.getElementById('classes-grid');
  grid.innerHTML = classes.map(cls => `
    <div class="class-card ${cls.active ? '' : 'archived'}"
         onclick="openClass('${cls.id}')"
         role="button" tabindex="0"
         onkeydown="if(event.key==='Enter'||event.key===' ')openClass('${cls.id}')">
      <div class="class-card-header">
        <span class="class-name">${esc(cls.name)}</span>
        <span class="badge ${cls.active ? 'badge-active' : 'badge-archived'}">
          ${cls.active ? 'Active' : 'Archived'}
        </span>
      </div>
      <div class="class-meta">
        ${cls.grade ? esc(cls.grade) + ' · ' : ''}${cls.subject ? esc(cls.subject) : ''}
        ${(!cls.grade && !cls.subject) ? 'No grade/subject set' : ''}
      </div>
      <div class="join-code-display">${esc(cls.join_code)}</div>
    </div>
  `).join('');
}

function openClass(id) {
  window.location.href = `/teacher/class.html?id=${encodeURIComponent(id)}`;
}

// ── Create class modal ────────────────────────────────────────────────────────

function openCreateModal() {
  document.getElementById('create-modal').classList.add('open');
  document.getElementById('class-name').focus();
}

function closeCreateModal() {
  document.getElementById('create-modal').classList.remove('open');
  document.getElementById('create-form').reset();
  document.getElementById('create-error').style.display = 'none';
}

// Close modal on backdrop click
document.getElementById('create-modal').addEventListener('click', function(e) {
  if (e.target === this) closeCreateModal();
});

document.getElementById('create-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn     = document.getElementById('create-btn');
  const errEl   = document.getElementById('create-error');
  const name    = document.getElementById('class-name').value.trim();
  const grade   = document.getElementById('class-grade').value.trim() || undefined;
  const subject = document.getElementById('class-subject').value.trim() || undefined;
  if (!name) { errEl.textContent = 'Class name is required.'; errEl.style.display = 'block'; return; }
  errEl.style.display = 'none';
  btn.disabled = true;
  btn.textContent = 'Creating…';
  try {
    const res = await fetch('/api/classes', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, grade, subject }),
    });
    const data = await res.json();
    if (!res.ok) {
      errEl.textContent = data.error || 'Failed to create class.';
      errEl.style.display = 'block';
      return;
    }
    closeCreateModal();
    await loadClasses();
  } catch {
    errEl.textContent = 'Network error. Please try again.';
    errEl.style.display = 'block';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Create Class';
  }
});

// ── Helpers ───────────────────────────────────────────────────────────────────

function showDashAlert(message, type) {
  const el = document.getElementById('alert-area');
  if (!el) return;
  el.innerHTML = `<div class="alert alert-${type}" role="alert">${esc(message)}</div>`;
}

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

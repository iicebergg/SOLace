/* teacher-class.js — roster, kiosk, progress, settings, export/import */
'use strict';

// ── State ─────────────────────────────────────────────────────────────────────

const params    = new URLSearchParams(window.location.search);
const CLASS_ID  = params.get('id');
const ROSTER_KEY = `solace_roster_${CLASS_ID}`;  // localStorage key for name map

let classData     = null;  // { id, name, grade, subject, join_code, active }
let serverSeats   = [];    // [{ id, seat_label }]
let progressData  = null;  // response from /progress

// Name map: { [seat_token_id]: { firstName, lastName } }
// Lives ONLY in teacher's localStorage — never sent to server.
function getRosterMap() {
  try { return JSON.parse(localStorage.getItem(ROSTER_KEY) || '{}'); }
  catch { return {}; }
}
function saveRosterMap(map) {
  localStorage.setItem(ROSTER_KEY, JSON.stringify(map));
}

// ── Boot ──────────────────────────────────────────────────────────────────────

(async function boot() {
  if (!CLASS_ID) { window.location.href = '/teacher/dashboard.html'; return; }
  await requireAuth();
  await loadClassData();
  await loadSeats();
  renderRoster();
  document.getElementById('loading-state').style.display = 'none';
  document.getElementById('main-content').style.display  = 'block';
})();

// ── Data fetching ─────────────────────────────────────────────────────────────

async function loadClassData() {
  const res = await fetch(`/api/classes`, { credentials: 'include' });
  if (res.status === 401) { window.location.href = '/teacher/login.html'; return; }
  const all = await res.json();
  classData = all.find(c => c.id === CLASS_ID);
  if (!classData) { window.location.href = '/teacher/dashboard.html'; return; }
  document.getElementById('class-name-heading').textContent = classData.name;
  const badge = document.getElementById('class-badge');
  badge.textContent  = classData.active ? 'Active' : 'Archived';
  badge.className    = `badge ${classData.active ? 'badge-active' : 'badge-archived'}`;
  // Settings tab
  document.getElementById('settings-name').value    = classData.name;
  document.getElementById('settings-grade').value   = classData.grade || '';
  document.getElementById('settings-subject').value = classData.subject || '';
  document.getElementById('settings-join-code').textContent = classData.join_code;
  const archiveBtn = document.getElementById('archive-btn');
  archiveBtn.textContent = classData.active ? 'Archive Class' : 'Unarchive Class';
  archiveBtn.className   = classData.active ? 'btn btn-danger btn-sm' : 'btn btn-secondary btn-sm';
  if (classData.code_expires_at) {
    document.getElementById('settings-code-expiry').textContent =
      `Expires ${new Date(classData.code_expires_at).toLocaleDateString()}`;
  }
}

async function loadSeats() {
  const res = await fetch(`/api/classes/${CLASS_ID}/seats`, { credentials: 'include' });
  if (res.ok) serverSeats = await res.json();
}

// ── Roster rendering ──────────────────────────────────────────────────────────
// Server data (seat tokens) is joined with localStorage name map at render time.
// Names never come from the server.

function renderRoster() {
  const tbody = document.getElementById('roster-tbody');
  const table = document.getElementById('roster-table');
  const empty = document.getElementById('roster-empty');
  if (!tbody) return;
  if (!serverSeats.length) {
    table.style.display = 'none';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  table.style.display = 'table';
  const roster = getRosterMap();
  tbody.innerHTML = serverSeats.map(seat => {
    const entry = roster[seat.id] || {};
    const displayName = (entry.firstName || entry.lastName)
      ? `${entry.firstName || ''} ${entry.lastName || ''}`.trim()
      : '<span style="color:#aaa; font-style:italic;">No name set</span>';
    return `
      <tr>
        <td><strong>${esc(seat.seat_label)}</strong></td>
        <td>${displayName}</td>
        <td>
          <button class="btn-icon btn-sm" onclick="editSeatName('${esc(seat.id)}','${esc(seat.seat_label)}')"
                  aria-label="Edit name for ${esc(seat.seat_label)}">Edit</button>
        </td>
      </tr>`;
  }).join('');
}

// ── Tab switching ─────────────────────────────────────────────────────────────

function switchClassTab(name) {
  document.querySelectorAll('.class-tab-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  const btn   = document.getElementById(`tab-${name}`);
  const panel = document.getElementById(`panel-${name}`);
  if (btn)   { btn.classList.add('active'); btn.setAttribute('aria-selected', 'true'); }
  if (panel) panel.classList.add('active');
  if (name === 'progress') loadProgress();
}

// ── Progress tab ──────────────────────────────────────────────────────────────

async function loadProgress() {
  document.getElementById('progress-table').style.display = 'none';
  document.getElementById('progress-empty').style.display = 'none';
  try {
    const res = await fetch(`/api/classes/${CLASS_ID}/progress`, { credentials: 'include' });
    if (!res.ok) throw new Error('fetch failed');
    progressData = await res.json();
    renderProgress();
  } catch {
    showTabAlert('progress', 'Could not load progress data. Please try again.', 'error');
  }
}

function renderProgress() {
  if (!progressData) return;
  const tbody    = document.getElementById('progress-tbody');
  const table    = document.getElementById('progress-table');
  const empty    = document.getElementById('progress-empty');
  const summary  = document.getElementById('class-summary');
  const sortBy   = document.getElementById('sort-select')?.value || 'seat';
  const roster   = getRosterMap();

  // Class summary cards
  const totals = progressData.class_totals || {};
  summary.innerHTML = `
    <div style="background:#f0f5fa;border-radius:12px;padding:1rem 1.5rem;min-width:140px;">
      <div style="font-size:1.75rem;font-weight:700;color:#4a6fa5;">
        ${totals.attempt_count ?? 0}
      </div>
      <div style="font-size:0.85rem;color:#6c757d;">Total Attempts</div>
    </div>
    <div style="background:#f0f5fa;border-radius:12px;padding:1rem 1.5rem;min-width:140px;">
      <div style="font-size:1.75rem;font-weight:700;color:#4a6fa5;">
        ${totals.avg_score_pct != null ? Math.round(totals.avg_score_pct * 100) + '%' : '—'}
      </div>
      <div style="font-size:0.85rem;color:#6c757d;">Class Average</div>
    </div>`;

  const seats = progressData.seats || [];
  if (!seats.some(s => s.attempt_count > 0)) {
    table.style.display = 'none';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  table.style.display = 'table';

  // Attach local names for sorting
  const rows = seats.map(seat => ({
    ...seat,
    localName: formatName(roster[seat.seat_token_id]),
  }));

  rows.sort((a, b) => {
    if (sortBy === 'name')     return a.localName.localeCompare(b.localName);
    if (sortBy === 'score')    return (b.avg_score_pct ?? -1) - (a.avg_score_pct ?? -1);
    if (sortBy === 'attempts') return b.attempt_count - a.attempt_count;
    return a.seat_label.localeCompare(b.seat_label, undefined, { numeric: true });
  });

  tbody.innerHTML = rows.map(seat => {
    const pct     = seat.avg_score_pct != null ? Math.round(seat.avg_score_pct * 100) : null;
    const barFill = pct != null ? `<div class="score-bar"><div class="score-bar-fill" style="width:${pct}%"></div></div>` : '';
    return `
      <tr>
        <td><strong>${esc(seat.seat_label)}</strong></td>
        <td>${seat.localName || '<span style="color:#aaa;font-style:italic;">No name</span>'}</td>
        <td>${seat.attempt_count}</td>
        <td class="score-bar-cell">
          <span class="score-pct">${pct != null ? pct + '%' : '—'}</span>
          ${barFill}
        </td>
      </tr>`;
  }).join('');
}

function formatName(entry) {
  if (!entry) return '';
  return `${entry.firstName || ''} ${entry.lastName || ''}`.trim();
}

// ── Add seats modal ───────────────────────────────────────────────────────────

function openAddSeatsModal() {
  document.getElementById('add-seats-modal').classList.add('open');
  document.getElementById('seat-count').focus();
}

document.getElementById('add-seats-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const errEl = document.getElementById('add-seats-error');
  const count = parseInt(document.getElementById('seat-count').value, 10);
  if (!count || count < 1 || count > 200) {
    errEl.textContent = 'Enter a number between 1 and 200.';
    errEl.style.display = 'block';
    return;
  }
  errEl.style.display = 'none';
  try {
    const res = await fetch(`/api/classes/${CLASS_ID}/seats`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ count }),
    });
    if (!res.ok) throw new Error('failed');
    serverSeats = await res.json();
    closeModal('add-seats-modal');
    renderRoster();
  } catch {
    errEl.textContent = 'Failed to add seats. Please try again.';
    errEl.style.display = 'block';
  }
});

// ── Typed roster modal ────────────────────────────────────────────────────────
// Names are processed entirely client-side. Server only receives seat count.

function openTypedRosterModal() {
  document.getElementById('typed-roster-modal').classList.add('open');
}

document.getElementById('typed-roster-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const errEl = document.getElementById('typed-roster-error');
  const raw   = document.getElementById('roster-names').value;
  const names = raw.split('\n')
    .map(line => line.trim())
    .filter(Boolean);
  if (!names.length) {
    errEl.textContent = 'Please enter at least one name.';
    errEl.style.display = 'block';
    return;
  }
  errEl.style.display = 'none';
  const btn = document.getElementById('typed-roster-btn');
  btn.disabled = true;
  btn.textContent = 'Creating seats…';
  try {
    // Step 1: Create seats on server (count only — no names).
    const res = await fetch(`/api/classes/${CLASS_ID}/seats`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ count: names.length }),
    });
    if (!res.ok) throw new Error('seat creation failed');
    serverSeats = await res.json();
    // Step 2: Map names to seat tokens client-side, store in localStorage.
    const roster = getRosterMap();
    names.forEach((name, i) => {
      const seat = serverSeats[i];
      if (!seat) return;
      const parts = name.split(/\s+/);
      roster[seat.id] = {
        firstName: parts[0] || '',
        lastName:  parts.slice(1).join(' ') || '',
      };
    });
    saveRosterMap(roster);
    closeModal('typed-roster-modal');
    renderRoster();
  } catch {
    errEl.textContent = 'Failed to create seats. Please try again.';
    errEl.style.display = 'block';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Create Roster';
  }
});

// ── Kiosk mode ────────────────────────────────────────────────────────────────
// Students type their name on the teacher's device.
// Each name is stored locally; the student sees only their seat number.
// Prior names are NOT shown to subsequent students.

let kioskSeatIndex = 0;

function openKioskMode() {
  kioskSeatIndex = getRosterMap() ? Object.keys(getRosterMap()).length : 0;
  document.getElementById('kiosk-overlay').classList.add('open');
  document.getElementById('kiosk-result').classList.remove('visible');
  document.getElementById('kiosk-first').value = '';
  document.getElementById('kiosk-last').value  = '';
  document.getElementById('kiosk-first').focus();
}

function closeKioskMode() {
  document.getElementById('kiosk-overlay').classList.remove('open');
  renderRoster();
}

document.getElementById('kiosk-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const firstName = document.getElementById('kiosk-first').value.trim();
  const lastName  = document.getElementById('kiosk-last').value.trim();
  if (!firstName) { document.getElementById('kiosk-first').focus(); return; }

  // Find the next unassigned seat.
  const roster    = getRosterMap();
  const assigned  = new Set(Object.keys(roster));
  const nextSeat  = serverSeats.find(s => !assigned.has(s.id));
  if (!nextSeat) {
    // All seats taken — create one more automatically.
    const res = await fetch(`/api/classes/${CLASS_ID}/seats`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ count: serverSeats.length + 1 }),
    });
    if (res.ok) serverSeats = await res.json();
  }
  const seat = serverSeats.find(s => !assigned.has(s.id));
  if (!seat) return;

  // Store name locally (never sent to server).
  roster[seat.id] = { firstName, lastName };
  saveRosterMap(roster);

  // Show result to student; clear input for next student.
  const result = document.getElementById('kiosk-result');
  result.textContent = `You are ${seat.seat_label}. Tell your teacher your seat number.`;
  result.classList.add('visible');
  // Clear inputs immediately so the next student can't see the previous name.
  document.getElementById('kiosk-first').value = '';
  document.getElementById('kiosk-last').value  = '';
  // Brief pause then hide result and refocus for next student.
  setTimeout(() => {
    result.classList.remove('visible');
    document.getElementById('kiosk-first').focus();
  }, 4000);
});

// ── Edit individual seat name ─────────────────────────────────────────────────

function editSeatName(seatId, seatLabel) {
  const roster = getRosterMap();
  const entry  = roster[seatId] || {};
  const first  = prompt(`First name for ${seatLabel}:`, entry.firstName || '');
  if (first === null) return;  // cancelled
  const last   = prompt(`Last name for ${seatLabel}:`, entry.lastName || '');
  if (last === null) return;
  if (first.trim() || last.trim()) {
    roster[seatId] = { firstName: first.trim(), lastName: last.trim() };
  } else {
    delete roster[seatId];
  }
  saveRosterMap(roster);
  renderRoster();
}

// ── Export roster ─────────────────────────────────────────────────────────────

function exportRoster() {
  const roster = getRosterMap();
  if (!Object.keys(roster).length) {
    alert('No names to export. Add student names to the roster first.');
    return;
  }
  if (!confirm(
    'The exported file contains student names and is your responsibility to store securely. ' +
    'This file lives on your device, not on SOLace. Continue?'
  )) return;
  const payload = {
    class_id:   CLASS_ID,
    class_name: classData?.name || '',
    exported_at: new Date().toISOString(),
    roster,
    // Preserve seat labels for readability
    seats: serverSeats.map(s => ({ id: s.id, seat_label: s.seat_label })),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `solace-roster-${CLASS_ID.slice(0,8)}-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Import roster ─────────────────────────────────────────────────────────────

function importRosterFile() {
  document.getElementById('import-file-input').click();
}

function handleImportFile(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (evt) => {
    try {
      const data = JSON.parse(evt.target.result);
      if (!data.roster || typeof data.roster !== 'object') {
        return alert('Invalid roster file format.');
      }
      const current = getRosterMap();
      const merged  = { ...current, ...data.roster };
      saveRosterMap(merged);
      renderRoster();
      alert(`Roster imported: ${Object.keys(data.roster).length} entries merged.`);
    } catch {
      alert('Could not parse file. Make sure it is a SOLace roster export.');
    }
  };
  reader.readAsText(file);
  e.target.value = '';  // reset so the same file can be imported again
}

// ── Print seat sheet ──────────────────────────────────────────────────────────
// No names — just seat labels with blank lines for teachers to write on.

function printSeatSheet() {
  const printArea = document.getElementById('print-area');
  const rows      = serverSeats.map(s => `
    <tr>
      <td style="width:120px; font-weight:bold;">${esc(s.seat_label)}</td>
      <td style="min-width:240px;">&nbsp;</td>
    </tr>`).join('');
  printArea.innerHTML = `
    <div class="print-sheet">
      <h2 style="margin-bottom:0.5rem;">${esc(classData?.name || 'Class')}</h2>
      <p style="margin-bottom:1rem; color:#666; font-size:0.9rem;">Seat assignment sheet — write each student's name next to their seat number.</p>
      <table>
        <thead>
          <tr>
            <th style="text-align:left; padding:0.5rem 1rem;">Seat</th>
            <th style="text-align:left; padding:0.5rem 1rem;">Student Name</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
  window.print();
}

// ── Settings tab ──────────────────────────────────────────────────────────────

document.getElementById('settings-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const name    = document.getElementById('settings-name').value.trim();
  const grade   = document.getElementById('settings-grade').value.trim() || null;
  const subject = document.getElementById('settings-subject').value.trim() || null;
  if (!name) return;
  try {
    const res = await fetch(`/api/classes/${CLASS_ID}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, grade, subject }),
    });
    if (!res.ok) throw new Error('failed');
    const updated = await res.json();
    classData = { ...classData, ...updated };
    document.getElementById('class-name-heading').textContent = updated.name;
    showTabAlert('settings', 'Changes saved.', 'success');
  } catch {
    showTabAlert('settings', 'Failed to save changes.', 'error');
  }
});

function copyJoinCode() {
  navigator.clipboard.writeText(classData?.join_code || '')
    .then(() => showTabAlert('settings', 'Join code copied!', 'success'))
    .catch(() => showTabAlert('settings', 'Could not copy. Please copy it manually.', 'error'));
}

function confirmRegenCode() {
  if (!confirm('Generate a new join code? The current code will stop working immediately.')) return;
  regenCode();
}

async function regenCode() {
  try {
    const res = await fetch(`/api/classes/${CLASS_ID}/regenerate-code`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    const data = await res.json();
    if (!res.ok) throw new Error('failed');
    classData.join_code = data.join_code;
    document.getElementById('settings-join-code').textContent = data.join_code;
    showTabAlert('settings', 'New join code generated.', 'success');
  } catch {
    showTabAlert('settings', 'Failed to regenerate code.', 'error');
  }
}

async function toggleArchive() {
  const newActive = !classData.active;
  const msg = newActive ? 'Unarchive this class?' : 'Archive this class? The join code will be invalidated.';
  if (!confirm(msg)) return;
  try {
    const res = await fetch(`/api/classes/${CLASS_ID}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ active: newActive }),
    });
    if (!res.ok) throw new Error('failed');
    classData.active = newActive;
    const btn   = document.getElementById('archive-btn');
    const badge = document.getElementById('class-badge');
    btn.textContent   = newActive ? 'Archive Class' : 'Unarchive Class';
    btn.className     = newActive ? 'btn btn-danger btn-sm' : 'btn btn-secondary btn-sm';
    badge.textContent = newActive ? 'Active' : 'Archived';
    badge.className   = `badge ${newActive ? 'badge-active' : 'badge-archived'}`;
    showTabAlert('settings', newActive ? 'Class is now active.' : 'Class archived.', 'success');
  } catch {
    showTabAlert('settings', 'Failed to update class status.', 'error');
  }
}

// ── Shared helpers ────────────────────────────────────────────────────────────

function openModal(id) {
  document.getElementById(id)?.classList.add('open');
}
function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
}

// Close modal on backdrop click
document.querySelectorAll('.modal-backdrop').forEach(el => {
  el.addEventListener('click', function(e) {
    if (e.target === this) closeModal(this.id);
  });
});

function showTabAlert(tab, message, type) {
  const el = document.getElementById(`${tab}-alert`);
  if (!el) return;
  el.innerHTML = `<div class="alert alert-${type}" role="alert">${esc(message)}</div>`;
  setTimeout(() => { el.innerHTML = ''; }, 5000);
}

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* join.js — student join flow: code entry → seat selection → confirmation */
'use strict';

// ── localStorage keys ─────────────────────────────────────────────────────────

const KEY_CLASS_ID    = 'solace_class_id';
const KEY_SEAT_ID     = 'solace_seat_token_id';
const KEY_CLASS_NAME  = 'solace_class_name';
const KEY_SEAT_LABEL  = 'solace_seat_label';

// ── State ─────────────────────────────────────────────────────────────────────

let currentClassId   = null;
let currentClassName = null;
let currentSeats     = [];

// ── Boot ──────────────────────────────────────────────────────────────────────

(function init() {
  // Auto-uppercase the join code input
  const codeInput = document.getElementById('join-code-input');
  if (codeInput) {
    codeInput.addEventListener('input', () => {
      codeInput.value = codeInput.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    });
  }

  document.getElementById('join-form')?.addEventListener('submit', handleJoinSubmit);
  document.getElementById('back-to-code-btn')?.addEventListener('click', goBackToCode);
  document.getElementById('switch-seat-btn')?.addEventListener('click', switchSeat);

  // Delegated: seat buttons are rendered dynamically into #seat-list.
  document.getElementById('seat-list')?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-seat-id]');
    if (btn) selectSeat(btn.dataset.seatId, btn.dataset.seatLabel);
  });

  // Check if already joined
  const storedSeatId    = localStorage.getItem(KEY_SEAT_ID);
  const storedClassId   = localStorage.getItem(KEY_CLASS_ID);
  const storedSeatLabel = localStorage.getItem(KEY_SEAT_LABEL);
  const storedClassName = localStorage.getItem(KEY_CLASS_NAME);

  if (storedSeatId && storedClassId) {
    showConfirmed(storedSeatLabel, storedClassName);
  }
})();

// ── Step 1: Submit join code ──────────────────────────────────────────────────

async function handleJoinSubmit(e) {
  e.preventDefault();
  const code = document.getElementById('join-code-input').value.trim().toUpperCase();
  if (code.length !== 6) {
    return showAlert('join-alert', 'Enter the full 6-character class code.', 'error');
  }
  hideAlert('join-alert');
  const btn = document.getElementById('join-btn');
  btn.disabled = true;
  btn.textContent = 'Looking up class…';
  try {
    const res = await fetch('/api/classes/join', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),  // ONLY the code — no name fields allowed
    });
    const data = await res.json();
    if (!res.ok) {
      showAlert('join-alert', 'That code was not found or has expired. Check with your teacher.', 'error');
      return;
    }
    currentClassId = data.class_id;
    currentSeats   = data.seats;
    showSeatPicker(data.class_name, data.seats);
  } catch {
    showAlert('join-alert', 'Network error. Please try again.', 'error');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Find My Class';
  }
}

// ── Step 2: Show seat picker ──────────────────────────────────────────────────

function showSeatPicker(className, seats) {
  currentClassName = className;
  document.getElementById('class-name-display').textContent = className;

  const list = document.getElementById('seat-list');
  if (!seats || !seats.length) {
    list.innerHTML = '<p style="color:#6c757d;">No seats available yet. Ask your teacher to add seats.</p>';
  } else {
    list.innerHTML = seats.map(seat => `
      <button class="btn btn-secondary" style="justify-content:flex-start; text-align:left; padding:0.85rem 1.25rem; font-size:1rem;"
              data-seat-id="${esc(seat.id)}" data-seat-label="${esc(seat.seat_label)}"
              aria-label="Select ${esc(seat.seat_label)}">
        ${esc(seat.seat_label)}
      </button>`).join('');
  }

  document.getElementById('step-code').style.display = 'none';
  document.getElementById('step-seat').style.display = 'block';
}

// ── Select a seat ─────────────────────────────────────────────────────────────

function selectSeat(seatId, seatLabel) {
  const className = currentClassName || localStorage.getItem(KEY_CLASS_NAME) || '';
  localStorage.setItem(KEY_CLASS_ID,   currentClassId);
  localStorage.setItem(KEY_SEAT_ID,    seatId);
  localStorage.setItem(KEY_CLASS_NAME, className);
  localStorage.setItem(KEY_SEAT_LABEL, seatLabel);
  showConfirmed(seatLabel, className);
}

// ── Step 3: Confirmed ─────────────────────────────────────────────────────────

function showConfirmed(seatLabel, className) {
  const text = document.getElementById('confirmed-seat-text');
  if (text) {
    text.textContent =
      `You are ${seatLabel || 'your seat'} in ${className || 'your class'}. ` +
      'Your practice tests will be linked to your class.';
  }
  document.getElementById('step-code').style.display      = 'none';
  document.getElementById('step-seat').style.display      = 'none';
  document.getElementById('step-confirmed').style.display = 'block';
}

// ── Navigation helpers ────────────────────────────────────────────────────────

function goBackToCode() {
  document.getElementById('step-seat').style.display = 'none';
  document.getElementById('step-code').style.display = 'block';
  document.getElementById('join-code-input').value   = '';
  document.getElementById('join-code-input').focus();
}

function switchSeat() {
  // Clear only the seat, not the class — let them pick again
  localStorage.removeItem(KEY_SEAT_ID);
  localStorage.removeItem(KEY_SEAT_LABEL);
  document.getElementById('step-confirmed').style.display = 'none';
  if (currentSeats.length) {
    const className = localStorage.getItem(KEY_CLASS_NAME) || '';
    document.getElementById('step-seat').style.display = 'block';
  } else {
    document.getElementById('step-code').style.display = 'block';
  }
}

// ── Alert helpers ─────────────────────────────────────────────────────────────

function showAlert(id, message, type = 'error') {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = `alert alert-${type}`;
  el.textContent = message;
  el.style.display = 'block';
}

function hideAlert(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

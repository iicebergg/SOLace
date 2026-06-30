/* teacher-auth.js — Better Auth client helpers (raw fetch, no SDK, no build step) */
'use strict';

// ── Session management ────────────────────────────────────────────────────────

async function getSession() {
  const res = await fetch('/api/auth/get-session', {
    credentials: 'include',
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.session ? data : null;
}

// Redirect to login if not authenticated. Call at top of every protected page.
async function requireAuth() {
  const session = await getSession();
  if (!session) {
    window.location.href = '/teacher/login.html';
    return null;
  }
  // Show email in nav if present
  const emailEl = document.getElementById('nav-email');
  if (emailEl && session.user?.email) emailEl.textContent = session.user.email;
  return session;
}

async function signOut() {
  await fetch('/api/auth/sign-out', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  window.location.href = '/teacher/login.html';
}

function signInWithGoogle() {
  window.location.href = '/api/auth/sign-in/social?provider=google&callbackURL=/teacher/dashboard.html';
}

// ── Alert helper ─────────────────────────────────────────────────────────────

function showAlert(elId, message, type = 'error') {
  const el = document.getElementById(elId);
  if (!el) return;
  el.className = `alert alert-${type}`;
  el.textContent = message;
  el.style.display = 'block';
}

function hideAlert(elId) {
  const el = document.getElementById(elId);
  if (el) el.style.display = 'none';
}

// ── Tab switching ─────────────────────────────────────────────────────────────

function switchTab(name) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

  const btn = document.getElementById(`tab-${name}`);
  const panel = document.getElementById(`panel-${name}`);
  if (btn) { btn.classList.add('active'); btn.setAttribute('aria-selected', 'true'); }
  if (panel) panel.classList.add('active');
  hideAlert('auth-alert');
}

function showForgotPassword(e) {
  e.preventDefault();
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('panel-forgot');
  if (panel) panel.classList.add('active');
  hideAlert('auth-alert');
}

// ── Password strength indicator ───────────────────────────────────────────────

function updatePwStrength(password) {
  const bar  = document.getElementById('pw-bar');
  const hint = document.getElementById('pw-hint');
  if (!bar) return;
  const len = password.length;
  if (len === 0) {
    bar.className = 'pw-strength-bar';
    bar.style.width = '0';
    if (hint) hint.textContent = 'Minimum 12 characters. Passphrases work great.';
  } else if (len < 12) {
    bar.className = 'pw-strength-bar weak';
    if (hint) hint.textContent = `${len}/12 — too short`;
  } else if (len < 20) {
    bar.className = 'pw-strength-bar medium';
    if (hint) hint.textContent = 'Good. Longer passphrases are even better.';
  } else {
    bar.className = 'pw-strength-bar strong';
    if (hint) hint.textContent = 'Strong passphrase.';
  }
}

// ── Sign In form ──────────────────────────────────────────────────────────────

async function handleSignIn(e) {
  e.preventDefault();
  const email    = document.getElementById('signin-email').value.trim();
  const password = document.getElementById('signin-password').value;
  const btn      = document.getElementById('signin-btn');
  if (!email || !password) return showAlert('auth-alert', 'Please fill in all fields.');
  hideAlert('auth-alert');
  btn.disabled = true;
  btn.textContent = 'Signing in…';
  try {
    const res = await fetch('/api/auth/sign-in/email', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      // Email enumeration protection: Better Auth returns a generic error
      showAlert('auth-alert', data.message || 'Sign-in failed. Check your email and password.');
      return;
    }
    if (data.twoFactorRedirect) {
      document.getElementById('totp-step').style.display = 'block';
      document.getElementById('signin-form').style.display = 'none';
      return;
    }
    window.location.href = '/teacher/dashboard.html';
  } catch {
    showAlert('auth-alert', 'Network error. Please try again.');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Sign In';
  }
}

// ── TOTP verification ─────────────────────────────────────────────────────────

async function handleTotpVerify(e) {
  e.preventDefault();
  const code = document.getElementById('totp-code').value.trim();
  if (!code) return;
  const res = await fetch('/api/auth/two-factor/verify-totp', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }),
  });
  if (res.ok) {
    window.location.href = '/teacher/dashboard.html';
  } else {
    showAlert('auth-alert', 'Invalid code. Try again.');
  }
}

// ── Sign Up form ──────────────────────────────────────────────────────────────

async function handleSignUp(e) {
  e.preventDefault();
  const email    = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;
  const btn      = document.getElementById('signup-btn');
  if (!email || !password) return showAlert('auth-alert', 'Please fill in all fields.');
  if (password.length < 12) {
    return showAlert('auth-alert', 'Password must be at least 12 characters.');
  }
  hideAlert('auth-alert');
  btn.disabled = true;
  btn.textContent = 'Creating account…';
  try {
    const res = await fetch('/api/auth/sign-up/email', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name: '' }),
    });
    const data = await res.json();
    if (!res.ok) {
      showAlert('auth-alert', data.message || 'Sign-up failed. Please try again.');
      return;
    }
    showAlert('auth-alert',
      'Account created! Check your inbox for a verification email before signing in.',
      'success');
    setTimeout(() => switchTab('signin'), 3000);
  } catch {
    showAlert('auth-alert', 'Network error. Please try again.');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Create Account';
  }
}

// ── Forgot password form ──────────────────────────────────────────────────────

async function handleForgotPassword(e) {
  e.preventDefault();
  const email = document.getElementById('forgot-email').value.trim();
  if (!email) return showAlert('auth-alert', 'Please enter your email.');
  const res = await fetch('/api/auth/forget-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, redirectTo: '/teacher/login.html' }),
  });
  // Always show success (email enumeration protection)
  showAlert('auth-alert',
    'If an account exists for that email, a reset link has been sent.',
    'success');
}

// ── Boot (login page only) ────────────────────────────────────────────────────

(function init() {
  // Only run form setup if we're on the login page
  const signinForm  = document.getElementById('signin-form');
  const signupForm  = document.getElementById('signup-form');
  const forgotForm  = document.getElementById('forgot-form');
  const totpForm    = document.getElementById('totp-form');
  const pwInput     = document.getElementById('signup-password');

  if (signinForm) signinForm.addEventListener('submit', handleSignIn);
  if (signupForm) signupForm.addEventListener('submit', handleSignUp);
  if (forgotForm) forgotForm.addEventListener('submit', handleForgotPassword);
  if (totpForm)   totpForm.addEventListener('submit', handleTotpVerify);
  if (pwInput)    pwInput.addEventListener('input', () => updatePwStrength(pwInput.value));

  // Tab buttons (data-tab attribute replaces inline onclick handlers)
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Forgot-password link and back button
  document.getElementById('forgot-link')?.addEventListener('click', showForgotPassword);
  document.getElementById('forgot-back-btn')?.addEventListener('click', () => switchTab('signin'));

  // Google OAuth buttons
  document.getElementById('google-signin-btn')?.addEventListener('click', signInWithGoogle);
  document.getElementById('google-signup-btn')?.addEventListener('click', signInWithGoogle);

  // Show Google OAuth buttons if env supports it
  // We detect this by trying to fetch session config — simpler: check a meta tag
  const metaGoogle = document.querySelector('meta[name="google-auth-enabled"]');
  if (metaGoogle) {
    document.getElementById('google-signin-wrap')?.style.setProperty('display', 'block');
    document.getElementById('google-signup-wrap')?.style.setProperty('display', 'block');
  }

  // Redirect authenticated teachers away from login page
  if (signinForm) {
    getSession().then(session => {
      if (session) window.location.href = '/teacher/dashboard.html';
    });
  }
})();

<script>
  // DARK MODE TOGGLE
  const toggle = document.querySelector('.mode-toggle');
  toggle?.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    toggle.setAttribute('aria-pressed', String(isDark));
    // persist (optional)
    try { localStorage.setItem('login.dark', isDark ? '1' : '0'); } catch(e){}
  });
  // restore preference
  try { if (localStorage.getItem('login.dark') === '1') document.body.classList.add('dark'); } catch(e){}

  // SIGN-IN LOADER + SUCCESS ANIMATION (demo)
  const form = document.querySelector('.login-card form');
  const btn  = document.querySelector('.btn-signin');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();                    // remove this in production
    if (!btn) return;

    btn.classList.add('loading');
    btn.setAttribute('disabled', 'true');

    // fake async login
    setTimeout(() => {
      btn.classList.remove('loading');
      btn.classList.add('success');
      btn.querySelector('.btn-text').textContent = 'Welcome!';
      setTimeout(() => {
        btn.removeAttribute('disabled');
        // location.href = '/dashboard';   // your real redirect
      }, 1200);
    }, 1400);
  });
</script>


document.addEventListener('DOMContentLoaded', () => {

  /* ---- Nav: solid background after scroll ---- */
  const nav = document.querySelector('.site-nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobile menu toggle ---- */
  const toggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    // Close mobile menu after a link is tapped (same-tab navigation)
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ---- Mark the current page's nav link as active ---- */
  const currentFile = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentFile || (currentFile === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ---- Hero ambient gold particles ---- */
  const particleField = document.querySelector('.hero-particles');
  if (particleField) {
    const count = window.innerWidth < 700 ? 14 : 26;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('span');
      p.style.left = Math.random() * 100 + '%';
      p.style.bottom = (Math.random() * 20) + '%';
      p.style.animationDelay = (Math.random() * 14) + 's';
      p.style.animationDuration = (10 + Math.random() * 10) + 's';
      particleField.appendChild(p);
    }
  }

  /* ---- Newsletter form: friendly inline confirmation ---- */
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      // If wired to Netlify Forms, let it submit normally.
      // This just gives instant feedback while the real request completes.
      const btn = newsletterForm.querySelector('button');
      if (btn) {
        btn.textContent = 'Joined ✓';
        btn.disabled = true;
      }
    });
  }

});

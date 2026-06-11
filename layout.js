// Polished Cleaning — shared layout components
// Detects if we're in /pages/ subdirectory to fix relative paths

const IS_SUBPAGE = window.location.pathname.includes('/pages/');
const ROOT = IS_SUBPAGE ? '../' : '';

const NAV_HTML = (activePage) => `
<nav id="site-nav">
  <div class="nav-inner">
    <a href="${ROOT}index.html" class="nav-logo">
      <span class="spark">✦</span> Polished
    </a>
    <ul class="nav-links">
      <li><a href="${ROOT}index.html" class="nav-home ${activePage==='home'?'active':''}">Home</a></li>
      <li><a href="${ROOT}pages/services.html" class="nav-services ${activePage==='services'?'active':''}">Services</a></li>
      <li><a href="${ROOT}pages/about.html" class="nav-about ${activePage==='about'?'active':''}">About</a></li>
      <li><a href="${ROOT}pages/reviews.html" class="nav-reviews ${activePage==='reviews'?'active':''}">Reviews</a></li>
      <li><a href="${ROOT}pages/book.html" class="nav-book nav-cta ${activePage==='book'?'active':''}">Book a Clean ✦</a></li>
    </ul>
    <button class="nav-hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-menu" id="mobile-menu">
    <a href="${ROOT}index.html">Home</a>
    <a href="${ROOT}pages/services.html">Services</a>
    <a href="${ROOT}pages/about.html">About</a>
    <a href="${ROOT}pages/reviews.html">Reviews</a>
    <a href="${ROOT}pages/book.html" class="nav-cta">Book a Clean ✦</a>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="nav-logo" style="font-family:'Fraunces',serif; font-size:1.3rem; font-weight:700; color:white; display:flex; align-items:center; gap:8px; margin-bottom:14px;">
          <span style="color:#4FC3D7;">✦</span> Polished
        </div>
        <p>Worcester's friendliest cleaning crew. Residential &amp; commercial. Running strong for nearly 20 years — now under a fresh name.</p>
        <div class="footer-social">
          <a href="https://www.facebook.com/PolishedMAwoo/" target="_blank" rel="noopener" class="social-btn facebook" title="Follow on Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="https://www.google.com/search?q=Polished+Cleaning+Service+Worcester+MA" target="_blank" rel="noopener" class="social-btn" title="Google Reviews">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          </a>
          <a href="tel:5083354191" class="social-btn" title="Call us">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <a href="${ROOT}pages/services.html">Deep Clean</a>
        <a href="${ROOT}pages/services.html">Regular Cleaning</a>
        <a href="${ROOT}pages/services.html">Move In / Move Out</a>
        <a href="${ROOT}pages/services.html">Commercial</a>
        <a href="${ROOT}pages/services.html">Post-Construction</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="tel:5083354191">(508) 335-4191</a>
        <a href="mailto:izabela.sztejner@gmail.com">izabela.sztejner@gmail.com</a>
        <a href="#">66 Crest Cir, Worcester MA</a>
        <a href="${ROOT}pages/book.html">Book a Clean →</a>
        <a href="https://www.facebook.com/PolishedMAwoo/" target="_blank" rel="noopener">Facebook →</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Polished Cleaning Service. Worcester, MA.</span>
      <span>Made with ♥ in Massachusetts</span>
    </div>
  </div>
</footer>
`;

function initNav() {
  const nav = document.getElementById('site-nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = open ? 'none' : 'flex';
  });

  // Close mobile menu on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      mobileMenu.style.display = 'none';
    }
  });
}

function mountLayout(page) {
  document.getElementById('nav-mount').innerHTML = NAV_HTML(page);
  document.getElementById('footer-mount').innerHTML = FOOTER_HTML;
  initNav();
}

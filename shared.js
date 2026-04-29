// ===========================
// ALPHA COMPUTER LTD - SHARED
// ===========================

// Navbar HTML
function getNavbar(activePage) {
  const pages = [
    { name: 'Home', href: 'index.html' },
    { name: 'About Us', href: 'about.html' },
    { name: 'Products', href: 'products.html' },
    { name: 'Services', href: 'services.html' },
    { name: 'Support', href: 'support.html' },
  ];

  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${p.name === activePage ? 'active' : ''}">${p.name}</a></li>`
  ).join('');

  // Check if user has already signed up
  const isSignedUp = localStorage.getItem('alpha_user_signed_up');
  const signUpBtn = isSignedUp
    ? '' // Hide sign up button if already signed up
    : `<a href="signup.html"><button class="btn-login">Sign Up</button></a>`;

  return `
  <nav class="navbar ${activePage === 'Home' ? '' : ''}" id="navbar">
    <a href="index.html" class="nav-logo">
      <div style="width:52px;height:52px;background:white;border-radius:8px;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:2px">
        <img src="images/logo2.jpg" style="width:100%;height:100%;object-fit:contain;" alt="Alpha Computer LTD Logo"/>
      </div>
    </a>
    <ul class="nav-links">
      ${links}
    </ul>
    <div class="nav-actions">
      <a href="https://wa.me/+250788310989" target="_blank"><button class="btn-contact">Contact Us</button></a>
      ${signUpBtn}
    </div>
    <div class="hamburger" id="hamburger" onclick="toggleMobileNav()">
      <span></span><span></span><span></span>
    </div>
  </nav>
  <div class="mobile-nav" id="mobileNav">
    ${pages.map(p => `<a href="${p.href}" class="${p.name === activePage ? 'active' : ''}">${p.name}</a>`).join('')}
    <a href="https://wa.me/+250788310989" target="_blank">Contact Us</a>
    ${isSignedUp ? '' : `<a href="signup.html">Sign Up</a>`}
  </div>`;
}

// Footer HTML
function getFooter() {
  return `
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px">
          <div style="width:52px;height:52px;background:white;border-radius:10px;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:2px">
            <img src="images/logo2.jpg" style="width:100%;height:100%;object-fit:contain;" alt="Alpha Computer LTD Logo"/>
          </div>
          <div style="color:white;font-family:Barlow,sans-serif;font-weight:800;font-size:1rem;line-height:1.1">Alpha Computer LTD<br><span style="font-size:0.7rem;opacity:0.5;font-weight:400"></span></div>
        </div>
        <p>Leading technology solutions provider in Rwanda, delivering innovative LED screens, interactive displays, and audio-visual systems.</p>
        <div class="social-links">
          <a href="https://www.facebook.com/profile.php?id=61554153129881" target="_blank" title="Facebook" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://twitter.com/alpha_computer_?s=20" target="_blank" title="X (Twitter)" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/alpha-computer-ltd-0b9b422a3/" target="_blank" title="LinkedIn" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://www.instagram.com/alphacomputerltd/" target="_blank" title="Instagram" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://wa.me/+250788310989" target="_blank" title="WhatsApp" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="index.html">› Home</a></li>
          <li><a href="about.html">› About Us</a></li>
          <li><a href="products.html">› Products</a></li>
          <li><a href="services.html">› Services</a></li>
          <li><a href="support.html">› Support</a></li>
          <li><a href="signup.html">› Sign Up</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact Info</h4>
        <div class="footer-contact-item">
          <div class="footer-contact-icon"><i class="fa-regular fa-envelope"></i></div>
          <div>
            <div class="label">Email</div>
            <div class="value">info@alphacomputer.rw</div>
          </div>
        </div>
        <div class="footer-contact-item">
          <div class="footer-contact-icon"><i class="fa-solid fa-phone"></i></div>
          <div>
            <div class="label">Phone</div>
            <div class="value">+250 788 310 989</div>
          </div>
        </div>
        <div class="footer-contact-item">
          <div class="footer-contact-icon"><i class="fa-solid fa-location-dot"></i></div>
          <div>
            <div class="label">Address</div>
            <div class="value">KN 2 Ave, Mic Building Ground Floor</div>
          </div>
        </div>
      </div>
      <div class="footer-col">
        <h4>Working Hours</h4>
        <div class="footer-hours-row"><span class="day">Mon - Fri</span><span class="time">9:00 AM - 5:00 PM</span></div>
        <div class="footer-hours-row"><span class="day">Saturday</span><span class="time">9:00 AM - 3:00 PM</span></div>
        <div class="footer-hours-row"><span class="day">Sunday</span><span class="time" style="color:rgba(255,255,255,0.4)">Closed</span></div>
        <a href="support.html" class="footer-get-touch"><i class="fa-regular fa-envelope"></i> Get in Touch</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026  Alpha Computer LTD. All rights reserved. | Kigali, Rwanda</p>
    </div>
  </footer>`;
}

// Mobile nav toggle
function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('open');
}

// Navbar scroll effect
function initNavbarScroll(isHomePage = false) {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  if (!isHomePage) {
    // Inner pages: always solid white
    navbar.classList.add('solid');
    return;
  }

  // Home page: add home-page class for white nav links
  navbar.classList.add('home-page');

  // Home page: transparent over hero, after 10px = frosted glass
  function updateNav() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  updateNav();
  window.addEventListener('scroll', updateNav);
}

// Animate on scroll
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}
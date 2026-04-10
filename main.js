// ===== NAV SCROLL EFFECT + ACTIVE LINK HIGHLIGHTING =====
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Scrolled class for nav shadow
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  // Active nav link based on scroll position
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// ===== BACK TO TOP =====
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      // Close mobile nav if open
      closeMobileNav();
    }
  });
});

// ===== MOBILE HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

function closeMobileNav() {
  hamburger.classList.remove('open');
  navLinksEl.classList.remove('mobile-open');
  hamburger.setAttribute('aria-label', '메뉴 열기');
}

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.contains('open');
  if (isOpen) {
    closeMobileNav();
  } else {
    hamburger.classList.add('open');
    navLinksEl.classList.add('mobile-open');
    hamburger.setAttribute('aria-label', '메뉴 닫기');
  }
});

// Close mobile nav on outside click
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target)) {
    closeMobileNav();
  }
});

// ===== FAQ TOGGLE =====
function toggleFaq(btn) {
  const item = btn.closest('.faq__item');
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq__item.open').forEach(el => el.classList.remove('open'));

  // Open clicked if it was closed
  if (!isOpen) item.classList.add('open');
}

// ===== SCROLL FADE-IN ANIMATION =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-up class to animatable elements
const animTargets = [
  '.card--feature',
  '.curriculum__item',
  '.review',
  '.faq__item',
  '.pricing-card',
  '.tool-chip',
];

animTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = `${i * 80}ms`;
    observer.observe(el);
  });
});

// Observe elements already marked fade-up in HTML
document.querySelectorAll('.fade-up').forEach(el => {
  if (!el.dataset.observed) {
    el.dataset.observed = '1';
    observer.observe(el);
  }
});

// ===== TYPING EFFECT IN CODE WINDOW =====
(function () {
  const lines = document.querySelectorAll('.code-window__body .code-line');
  lines.forEach((line, i) => {
    line.style.opacity = '0';
    line.style.transition = 'opacity 0.3s';
    setTimeout(() => { line.style.opacity = '1'; }, 400 + i * 200);
  });
})();

// ===== ANIMATED COUNTER FOR STATS =====
function animateCounter(el, target, duration = 1200) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}

// Trigger counters when hero stats come into view
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      if (!isNaN(target)) {
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ===== COUNTDOWN TIMER =====
(function () {
  // Target: 7 days from page load (or you can set a fixed date)
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 7);
  deadline.setHours(23, 59, 59, 0);

  function pad(n) { return String(n).padStart(2, '0'); }

  function updateCountdown() {
    const now = new Date();
    const diff = deadline - now;

    if (diff <= 0) {
      document.getElementById('countdown').innerHTML = '<span style="font-size:13px;color:var(--text-muted)">마감되었습니다</span>';
      return;
    }

    const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs  = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('cdDays').textContent  = pad(days);
    document.getElementById('cdHours').textContent = pad(hours);
    document.getElementById('cdMins').textContent  = pad(mins);
    document.getElementById('cdSecs').textContent  = pad(secs);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();

// ===== TICKER DUPLICATION for seamless loop =====
(function () {
  const ticker = document.getElementById('ticker');
  if (ticker) {
    // Duplicate content for seamless infinite scroll
    ticker.innerHTML += ticker.innerHTML;
  }
})();

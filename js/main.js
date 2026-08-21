/* ==========================================================================
   BIKRAM GORAI — MAIN APPLICATION LOGIC
   Scroll Reveals, Navigation Highlight, Marquee Duplication & Initialization
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Marquee Content Duplication for Infinite Seamless Loop
  const marqueeContent = document.getElementById('marquee-content-track');
  if (marqueeContent) {
    marqueeContent.innerHTML += marqueeContent.innerHTML;
  }

  // 2. Scroll Reveal Animations (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 3. Active Nav Link Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});

/* ==========================================================================
   4. Background Asset Preloader (Low Priority Post-Landing Cache)
   Ensures hero loads instantly, then caches all secondary images in background
   ========================================================================== */
(function preloadPortfolioAssets() {
  const assetsToPreload = [
    'assets/images/projects/consistency-daily.png',
    'assets/images/projects/eventix.png',
    'assets/images/projects/anya.png',
    'assets/images/photography/bg1.png',
    'assets/images/photography/bg4.png',
    'assets/images/send-message.svg'
  ];

  function cacheImages() {
    assetsToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  if (document.readyState === 'complete') {
    cacheImages();
  } else {
    window.addEventListener('load', () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(cacheImages, { timeout: 2000 });
      } else {
        setTimeout(cacheImages, 200);
      }
    });
  }
})();

/* ==========================================================================
   BIKRAM GORAI — MAIN APPLICATION LOGIC
   Scroll Reveals, Navigation Highlight, Marquee Duplication & Initialization
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 0. Initialize Lucide Icons Pack
  if (window.lucide) {
    lucide.createIcons();
  }

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

  // 4. Systems Perspective "Behind The Interface" Floating Glassmorphism Expander
  const perspectiveWrap = document.getElementById('perspective-interactive-wrap');
  const perspectiveBtn = document.getElementById('perspective-expand-btn');
  const perspectiveBtnText = document.getElementById('perspective-btn-text');
  const perspectiveBtnIcon = document.getElementById('perspective-btn-icon');

  if (perspectiveWrap && perspectiveBtn) {
    perspectiveBtn.addEventListener('click', () => {
      const isExpanded = perspectiveWrap.classList.toggle('expanded');
      perspectiveBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

      if (isExpanded) {
        if (perspectiveBtnText) perspectiveBtnText.textContent = 'Close Breakdown';
        if (perspectiveBtnIcon) perspectiveBtnIcon.innerHTML = '<i data-lucide="chevron-up" style="width: 16px; height: 16px; stroke-width: 2.5;"></i>';
      } else {
        if (perspectiveBtnText) perspectiveBtnText.textContent = 'Behind The Interface';
        if (perspectiveBtnIcon) perspectiveBtnIcon.innerHTML = '<i data-lucide="chevron-down" style="width: 16px; height: 16px; stroke-width: 2.5;"></i>';

        // When collapsing, smoothly scroll back to the perspective section header
        const perspectiveSection = document.getElementById('perspective');
        if (perspectiveSection) {
          const headerOffset = 80;
          const elementPosition = perspectiveSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }

      if (window.lucide) {
        lucide.createIcons();
      }

      // Notify window resize & ScrollTrigger so Mjolnir rope widget & GSAP recalc page bounds
      window.dispatchEvent(new Event('resize'));
      window.dispatchEvent(new Event('scroll'));
      if (typeof ScrollTrigger !== 'undefined') {
        setTimeout(() => ScrollTrigger.refresh(), 350);
      }
    });
  }

  // 5. Clean Return from External Tabs / PDF Links (Prevent stuck hover/focus translation)
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
      const self = this;
      self.blur();
      setTimeout(() => self.blur(), 50);
    });
  });

  window.addEventListener('focus', () => {
    if (document.activeElement && (document.activeElement.tagName === 'A' || document.activeElement.tagName === 'BUTTON')) {
      document.activeElement.blur();
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      if (document.activeElement && (document.activeElement.tagName === 'A' || document.activeElement.tagName === 'BUTTON')) {
        document.activeElement.blur();
      }
    }
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

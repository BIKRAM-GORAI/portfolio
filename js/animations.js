/* ==========================================================================
   BIKRAM GORAI — GSAP ANIMATIONS & SCROLL TRIGGER ENGINE
   Silky Smooth Entrance Timeline, Scroll-Driven Reveals & Micro-Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Check if GSAP & ScrollTrigger are available
  if (typeof gsap === 'undefined') return;

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (typeof ScrollToPlugin !== 'undefined') {
    gsap.registerPlugin(ScrollToPlugin);
  }

  // --------------------------------------------------------------------------
  // 1. HERO ENTRANCE TIMELINE (Instant & Fast Load)
  // --------------------------------------------------------------------------
  const heroTl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.6 } });

  heroTl.from(".site-header", { y: -20, opacity: 0, duration: 0.4 })
        .from(".hero-transparent-img", { scale: 0.95, opacity: 0, duration: 0.5 }, 0.1) // Starts instantly at 0.1s!
        .from(".hero-headline", { y: 20, opacity: 0, duration: 0.5 }, 0.15)
        .from(".hero-bio", { y: 15, opacity: 0, duration: 0.4 }, 0.25)
        .from(".hero-content .btn-primary, .hero-content .btn-secondary", { y: 15, opacity: 0, stagger: 0.08, duration: 0.4 }, 0.35)
        .from(".stat-item", { y: 15, opacity: 0, stagger: 0.06, duration: 0.4 }, 0.45);

  // --------------------------------------------------------------------------
  // 2. TRANSPARENT PHOTOS SUBTLE IDLE FLOATING MOVEMENT
  // --------------------------------------------------------------------------
  gsap.to(".hero-transparent-img", {
    y: 10,
    duration: 3.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".philosophy-transparent-img", {
    y: 12,
    duration: 3.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  // --------------------------------------------------------------------------
  // 3. SCROLL TRIGGER SECTION REVEALS
  // --------------------------------------------------------------------------
  if (typeof ScrollTrigger !== 'undefined') {

    // Section Headings & Section Tags
    gsap.utils.toArray(".section-tag, .section-headline, .contact-headline").forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none"
        },
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out"
      });
    });

    // Rotation Section Cards Stagger Reveal
    gsap.from(".rotation-card", {
      scrollTrigger: {
        trigger: ".rotation-grid",
        start: "top 82%"
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out"
    });

    // Featured Project Card Spotlight
    gsap.from(".project-featured-card", {
      scrollTrigger: {
        trigger: ".project-featured-card",
        start: "top 82%"
      },
      y: 45,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Editorial Philosophy Quote
    gsap.from(".editorial-quote", {
      scrollTrigger: {
        trigger: ".philosophy-section",
        start: "top 78%"
      },
      y: 35,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out"
    });

    // Hackathon Cards Stagger
    gsap.from(".hackathon-card", {
      scrollTrigger: {
        trigger: ".hackathon-grid",
        start: "top 82%"
      },
      y: 35,
      opacity: 0,
      duration: 0.8,
      stagger: 0.18,
      ease: "power2.out"
    });

    // Terminal Intake Form Box
    gsap.from(".terminal-wrapper", {
      scrollTrigger: {
        trigger: ".terminal-wrapper",
        start: "top 85%"
      },
      y: 45,
      opacity: 0,
      scale: 0.98,
      duration: 1,
      ease: "power3.out"
    });
  }

  // --------------------------------------------------------------------------
  // 4. GSAP SMOOTH SCROLL NAVIGATION
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#' && targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();

          // Instant active state feedback
          if (this.classList.contains('nav-link')) {
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
          }

          if (typeof ScrollToPlugin !== 'undefined') {
            gsap.to(window, {
              duration: 0.6,
              scrollTo: { y: targetEl, offsetY: 70 },
              ease: "power2.out"
            });
          } else {
            window.scrollTo({
              top: targetEl.offsetTop - 70,
              behavior: 'smooth'
            });
          }
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 5. CARD MAGNETIC PARALLAX TILT EFFECT
  // --------------------------------------------------------------------------
  document.querySelectorAll('.rotation-card, .hackathon-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(card, {
        rotateX: -y * 0.02,
        rotateY: x * 0.02,
        duration: 0.4,
        ease: "power1.out"
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power2.out"
      });
    });
  });
});

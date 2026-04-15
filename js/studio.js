/* =============================================
   PINKCORE PILATES STUDIO — Main JavaScript
   Vanilla JS only — no jQuery, no frameworks
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================
     NAV SCROLL BEHAVIOR
     ========================================= */
  const nav = document.getElementById('site-nav');

  const handleNavScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* =========================================
     MOBILE MENU
     ========================================= */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  const toggleMobileMenu = () => {
    const isOpen = hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggleMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  });

  /* =========================================
     SMOOTH SCROLL
     ========================================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navHeight = nav.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });

  /* =========================================
     SCHEDULE DAY TABS
     ========================================= */
  const scheduleTabs = document.querySelectorAll('.schedule-tab');
  const scheduleDays = document.querySelectorAll('.schedule-day');

  scheduleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const day = tab.dataset.day;

      scheduleTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      scheduleDays.forEach(d => d.classList.remove('active'));
      const target = document.getElementById(`schedule-${day}`);
      if (target) target.classList.add('active');
    });
  });

  /* =========================================
     MOCK BOOKING FLOW
     ========================================= */
  const bookingPanels = document.querySelectorAll('.booking-panel');
  const stepIndicators = document.querySelectorAll('.booking-step-indicator');
  const stepLines = document.querySelectorAll('.booking-step-line');

  const classData = {
    mat: { name: 'Mat Pilates', time: '8:30 AM', instructor: 'Elena R.' },
    reformer: { name: 'Reformer', time: '10:00 AM', instructor: 'Jessica L.' },
    barre: { name: 'Barre Fusion', time: '12:15 PM', instructor: 'Mia K.' },
    power: { name: 'Power Pilates', time: '5:30 PM', instructor: 'Sarah M.' }
  };

  const goToStep = (stepNum) => {
    bookingPanels.forEach(p => p.classList.remove('active'));
    const panel = document.getElementById(`booking-step-${stepNum}`);
    if (panel) panel.classList.add('active');

    stepIndicators.forEach((ind, i) => {
      ind.classList.remove('active', 'completed');
      if (i + 1 < stepNum) ind.classList.add('completed');
      if (i + 1 === stepNum) ind.classList.add('active');
    });

    stepLines.forEach((line, i) => {
      line.classList.toggle('active', i + 1 < stepNum);
    });
  };

  // Next buttons
  document.querySelectorAll('.booking-next').forEach(btn => {
    btn.addEventListener('click', () => {
      const nextStep = parseInt(btn.dataset.next, 10);

      // Update confirmation details when moving to step 2
      if (nextStep === 2) {
        const selected = document.querySelector('input[name="booking-class"]:checked');
        if (selected) {
          const data = classData[selected.value];
          const confirmClass = document.getElementById('booking-confirm-class');
          const confirmTime = document.getElementById('booking-confirm-time');
          const confirmInstructor = document.getElementById('booking-confirm-instructor');
          if (confirmClass) confirmClass.textContent = data.name;
          if (confirmTime) confirmTime.textContent = data.time;
          if (confirmInstructor) confirmInstructor.textContent = data.instructor;
        }
      }

      goToStep(nextStep);
    });
  });

  // Back buttons
  document.querySelectorAll('.booking-back').forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(parseInt(btn.dataset.prev, 10));
    });
  });

  // Reset button
  const resetBtn = document.querySelector('.booking-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => goToStep(1));
  }

  /* =========================================
     INTERSECTION OBSERVER — Fade-in animations
     ========================================= */
  const animateElements = document.querySelectorAll('.animate-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    animateElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything
    animateElements.forEach(el => el.classList.add('visible'));
  }

});

/* =============================================
   PINKCORE — Main JavaScript
   Version 1.0 | pinkcore-web
   Built by BotMakers.ai

   Nav scroll behavior, mobile menu, smooth scroll,
   scroll animations, FAQ accordion.
   Vanilla JS only — no jQuery.
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
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
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
     FAQ ACCORDION (mobile only)
     ========================================= */
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Only toggle on mobile/tablet (desktop shows all answers)
      if (window.innerWidth >= 1024) return;

      const item = btn.parentElement;
      const isOpen = item.classList.toggle('active');
      btn.setAttribute('aria-expanded', isOpen);
    });
  });

  /* =========================================
     STUDIO APPLICATION MODAL
     ========================================= */
  const studioModal = document.getElementById('studio-modal');
  const openModalBtn = document.getElementById('open-studio-modal');
  const closeModalBtn = document.getElementById('close-studio-modal');
  const studioAppForm = document.getElementById('studio-app-form');
  const studioAppSubmit = document.getElementById('studio-app-submit');
  const studioAppSuccess = document.getElementById('studio-app-success');
  const studioAppError = document.getElementById('studio-app-error');

  const openModal = () => {
    studioModal.classList.add('active');
    studioModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    studioModal.classList.remove('active');
    studioModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (openModalBtn) {
    openModalBtn.addEventListener('click', openModal);
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  // Close on overlay click
  if (studioModal) {
    studioModal.addEventListener('click', (e) => {
      if (e.target === studioModal) closeModal();
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && studioModal && studioModal.classList.contains('active')) {
      closeModal();
    }
  });

  // Studio Application Form Submit
  if (studioAppForm) {
    studioAppForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Honeypot check
      const honeypot = studioAppForm.querySelector('input[name="website"]');
      if (honeypot && honeypot.value) return;

      // Validate required fields
      const required = studioAppForm.querySelectorAll('[required]');
      let valid = true;

      required.forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        } else {
          field.classList.remove('error');
        }
      });

      // Email format validation
      const emailField = studioAppForm.querySelector('input[type="email"]');
      if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        emailField.classList.add('error');
        valid = false;
      }

      if (!valid) return;

      // Loading state
      studioAppSubmit.disabled = true;
      studioAppSubmit.textContent = 'Submitting...';

      // Collect form data
      const formData = new FormData(studioAppForm);
      const data = {};
      formData.forEach((value, key) => {
        if (key !== 'website') data[key] = value;
      });

      // Console.log for now (connect to Resend in Stage 6)
      console.log('beta_studio_application', data);

      // Simulate success
      setTimeout(() => {
        studioAppForm.style.display = 'none';
        studioAppSuccess.style.display = 'block';
        studioAppError.style.display = 'none';
      }, 600);
    });
  }

  /* =========================================
     BETA CONSUMER — INVITE CODE
     ========================================= */
  const betaInviteBtn = document.getElementById('beta-invite-btn');
  const betaInviteInput = document.getElementById('beta-invite-input');
  const betaInviteEmailWrap = document.getElementById('beta-invite-email');
  const betaInviteEmailInput = document.getElementById('beta-invite-email-input');
  const betaInviteEmailBtn = document.getElementById('beta-invite-email-btn');
  const betaInviteSuccess = document.getElementById('beta-invite-success');

  if (betaInviteBtn) {
    betaInviteBtn.addEventListener('click', () => {
      const code = betaInviteInput ? betaInviteInput.value.trim() : '';

      if (!code) {
        // Empty input — scroll to waitlist
        const waitlistSection = document.querySelector('#waitlist');
        if (waitlistSection) {
          const navHeight = nav.offsetHeight;
          const targetPosition = waitlistSection.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
        return;
      }

      // Show email field
      if (betaInviteEmailWrap) {
        betaInviteEmailWrap.style.display = 'block';
        if (betaInviteEmailInput) betaInviteEmailInput.focus();
      }
    });
  }

  if (betaInviteEmailBtn) {
    betaInviteEmailBtn.addEventListener('click', () => {
      const email = betaInviteEmailInput ? betaInviteEmailInput.value.trim() : '';
      const code = betaInviteInput ? betaInviteInput.value.trim() : '';

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (betaInviteEmailInput) betaInviteEmailInput.classList.add('error');
        return;
      }

      betaInviteEmailInput.classList.remove('error');

      // Console.log for now (connect to Resend in Stage 6)
      console.log('beta_consumer', { inviteCode: code, email: email });

      // Show success
      const inviteRow = document.getElementById('beta-invite-row');
      const inviteNote = document.querySelector('.beta-invite-note');
      if (inviteRow) inviteRow.style.display = 'none';
      if (inviteNote) inviteNote.style.display = 'none';
      if (betaInviteEmailWrap) betaInviteEmailWrap.style.display = 'none';
      if (betaInviteSuccess) betaInviteSuccess.style.display = 'block';
    });
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
    animateElements.forEach(el => el.classList.add('visible'));
  }

});

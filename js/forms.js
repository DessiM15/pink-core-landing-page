/* =============================================
   PINKCORE PILATES STUDIO — Contact Form
   Validation, honeypot, success/error states
   Console.log on submit (no backend)
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const honeypot = form.querySelector('input[name="website"]');
  const submitBtn = document.getElementById('contact-submit');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');
  const successEl = document.getElementById('form-success');
  const errorEl = document.getElementById('form-error-state');
  const retryBtn = document.getElementById('form-retry');

  const errorName = document.getElementById('error-name');
  const errorEmail = document.getElementById('error-email');
  const errorMessage = document.getElementById('error-message');

  /* =========================================
     VALIDATION HELPERS
     ========================================= */
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const clearErrors = () => {
    [nameInput, emailInput, messageInput].forEach(input => {
      input.classList.remove('error');
    });
    errorName.textContent = '';
    errorEmail.textContent = '';
    errorMessage.textContent = '';
  };

  const validate = () => {
    clearErrors();
    let valid = true;

    if (!nameInput.value.trim()) {
      nameInput.classList.add('error');
      errorName.textContent = 'Please enter your name.';
      valid = false;
    }

    if (!emailInput.value.trim()) {
      emailInput.classList.add('error');
      errorEmail.textContent = 'Please enter your email address.';
      valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailInput.classList.add('error');
      errorEmail.textContent = 'Please enter a valid email address.';
      valid = false;
    }

    if (!messageInput.value.trim()) {
      messageInput.classList.add('error');
      errorMessage.textContent = 'Please enter a message.';
      valid = false;
    }

    return valid;
  };

  /* =========================================
     CLEAR ERROR ON INPUT
     ========================================= */
  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errorSpan = document.getElementById(`error-${input.name}`);
      if (errorSpan) errorSpan.textContent = '';
    });
  });

  /* =========================================
     FORM SUBMIT
     ========================================= */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Honeypot check
    if (honeypot && honeypot.value) {
      console.log('[PinkCore] Spam detected via honeypot. Submission blocked.');
      return;
    }

    if (!validate()) return;

    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-flex';
    submitBtn.disabled = true;

    // Simulate network delay
    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
      timestamp: new Date().toISOString()
    };

    console.log('[PinkCore] Contact Form Submission:', formData);

    setTimeout(() => {
      // Show success state
      form.style.display = 'none';
      successEl.style.display = 'block';

      // Reset button state for if they retry
      btnText.style.display = 'inline-flex';
      btnLoading.style.display = 'none';
      submitBtn.disabled = false;
    }, 1500);
  });

  /* =========================================
     RETRY HANDLER
     ========================================= */
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      errorEl.style.display = 'none';
      form.style.display = 'block';
      form.reset();
      clearErrors();
    });
  }
});

const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    feedback.textContent = '';

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Simple email regex
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name) {
      feedback.textContent = 'Please enter your name.';
      form.name.focus();
      return;
    }
    if (!email || !emailIsValid) {
      feedback.textContent = 'Please enter a valid email address.';
      form.email.focus();
      return;
    }
    if (!message) {
      feedback.textContent = 'Please enter a message.';
      form.message.focus();
      return;
    }

    // Simulate form submission delay
    feedback.style.color = 'var(--color-primary)';
    feedback.textContent = 'Sending your message...';

    setTimeout(() => {
      feedback.textContent = 'Thank you, your message has been sent!';
      form.reset();
    }, 1500);
  });
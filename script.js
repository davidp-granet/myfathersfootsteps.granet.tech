const contactModal = document.querySelector('[data-contact-modal]');
const contactDialog = contactModal?.querySelector('.contact-modal-dialog');
const openContactButtons = document.querySelectorAll('[data-contact-open], [data-open-contact]');
const closeContactButtons = document.querySelectorAll('[data-contact-close], [data-close-contact]');

let lastContactTrigger = null;

function openContactModal(trigger) {
  if (!contactModal) return;

  lastContactTrigger = trigger || null;
  contactModal.classList.add('is-open');
  contactModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  window.requestAnimationFrame(() => {
    contactDialog?.focus({ preventScroll: true });
  });
}

function closeContactModal() {
  if (!contactModal) return;

  contactModal.classList.remove('is-open');
  contactModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  lastContactTrigger?.focus?.({ preventScroll: true });
}

openContactButtons.forEach((button) => {
  button.addEventListener('click', () => openContactModal(button));
});

closeContactButtons.forEach((button) => {
  button.addEventListener('click', closeContactModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && contactModal?.classList.contains('is-open')) {
    closeContactModal();
  }
});

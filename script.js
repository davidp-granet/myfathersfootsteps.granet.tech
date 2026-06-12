const modal = document.querySelector('[data-contact-modal]');
const openButtons = document.querySelectorAll('[data-open-contact]');
const closeButtons = document.querySelectorAll('[data-close-contact]');

openButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (modal && typeof modal.showModal === 'function') {
      modal.showModal();
    } else if (modal) {
      modal.setAttribute('open', '');
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (modal && typeof modal.close === 'function') {
      modal.close();
    } else if (modal) {
      modal.removeAttribute('open');
    }
  });
});

if (modal) {
  modal.addEventListener('click', (event) => {
    const modalBox = modal.getBoundingClientRect();
    const clickedOutside =
      event.clientX < modalBox.left ||
      event.clientX > modalBox.right ||
      event.clientY < modalBox.top ||
      event.clientY > modalBox.bottom;

    if (clickedOutside && typeof modal.close === 'function') {
      modal.close();
    }
  });
}

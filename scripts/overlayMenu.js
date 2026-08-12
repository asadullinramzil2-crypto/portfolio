export default function initOverlayMenu() {
  const root = '[data-js-overlay-menu]';
  const dialog = '[data-js-overlay-menu-dialog]';
  const burgerButton = '[data-js-overlay-menu-burger-button]';
  const menuLinks = '[data-js-overlay-menu-link]';

  const isActive = 'is-active';
  const isLock = 'is-lock';

  const rootElement = document.querySelector(root);
  if (!rootElement) return;

  const dialogElement = rootElement.querySelector(dialog);
  const burgerButtonElement = rootElement.querySelector(burgerButton);
  const links = rootElement.querySelectorAll(menuLinks);

  function closeMenu() {
    dialogElement.open = false;
    burgerButtonElement.classList.remove(isActive);
    document.documentElement.classList.remove(isLock);
  }

  burgerButtonElement.addEventListener('click', (e) => {
    e.preventDefault();

    const isOpen = dialogElement.open;

    burgerButtonElement.classList.toggle(isActive);
    dialogElement.open = !isOpen;
    document.documentElement.classList.toggle(isLock);
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}
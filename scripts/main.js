import overlayMenu from './overlayMenu.js'

document.addEventListener('DOMContentLoaded', () => {
  overlayMenu()
})

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('image-modal');
  const modalGallery = document.getElementById('modal-gallery');
  const scrollContainer = document.querySelector('.modal__scroll-container');
  const closeBtn = document.querySelector('.modal__close');

  const galleryTriggers = document.querySelectorAll('.cases__link, .certificates__item');

  galleryTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      
      const imagesData = trigger.getAttribute('data-images');
      if (!imagesData) return;

      const imagesArray = imagesData.split(',').map(src => src.trim());

      modalGallery.innerHTML = '';

      imagesArray.forEach(src => {
        const imgElement = document.createElement('img');
        imgElement.src = src;
        imgElement.className = 'modal__img';
        imgElement.loading = 'lazy';
        modalGallery.appendChild(imgElement);
      });
      
      scrollContainer.scrollTop = 0;

      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden'; 
    });
  });

  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = ''; 
    

    setTimeout(() => {
      modalGallery.innerHTML = '';
    }, 300);
  };

  closeBtn.addEventListener('click', closeModal);

  scrollContainer.addEventListener('click', (event) => {
    if (event.target === scrollContainer) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
});

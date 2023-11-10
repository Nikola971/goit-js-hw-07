
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function renderGallery() {
  const galleryMarkup = galleryItems
    .map(({ original, preview, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    })
    .join('');

  gallery.innerHTML = galleryMarkup;
}

renderGallery();

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" alt="Image description">
  `);

  instance.show();

  document.addEventListener('keydown', closeModalOnEscape);

  function closeModalOnEscape(e) {
    if (e.code === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', closeModalOnEscape);
    }
  }
}
gallery.addEventListener('click', openModal);

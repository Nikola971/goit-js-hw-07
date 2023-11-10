// 02-lightbox.js
import { galleryItems } from './gallery-items.js';

// Select the gallery container
const galleryContainer = document.querySelector('.gallery');

// Function to create gallery items
function createGalleryItem({ preview, original, description }) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.setAttribute('href', original);

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.setAttribute('src', preview);
  image.setAttribute('alt', description);

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

// Render gallery items
galleryItems.forEach(item => {
  const galleryItem = createGalleryItem(item);
  galleryContainer.appendChild(galleryItem);
});

// Initialize SimpleLightbox
document.addEventListener('DOMContentLoaded', function () {
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    close: false, // Додаткова опція, щоб уникнути закриття лайтбоксу
  });
});

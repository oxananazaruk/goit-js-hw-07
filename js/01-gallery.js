import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const markup = createMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', markup);

galleryEl.addEventListener('click', onClickImageHandle);

function createMarkup(array) {
    return array.map(({ preview, original, description }) => {
        return `<li data-description="${description}" class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('');
};

function onClickImageHandle(event) {
  event.preventDefault();
    if (event.target === event.currentTarget) {
        return;
    }

  const targetElement = event.target.closest('.gallery__item');
  const imageName = targetElement.dataset.description;
  const imageInfo = galleryItems.find(img => img.description === imageName);
 
  const instance = basicLightbox.create(`
  <div class="modal">
      <img src="${imageInfo.original}" alt="${imageInfo.description}" width="800" height="600" />
      </div>
   `);

  instance.show();
};
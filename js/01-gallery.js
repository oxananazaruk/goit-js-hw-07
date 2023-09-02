import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const markup = createMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', markup);

galleryEl.addEventListener('clikc', onClickImageHandle);

function createMarkup(array) {
    return array.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
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
    // event.stopPropagation();
    if (event.target === event.currentTarget) {
        return;
    }

    const targetElement = event.target.closest('.gallery__image');
    console.log(targetElement);
    // const imageName = 
};
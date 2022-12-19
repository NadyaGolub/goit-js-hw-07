import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(`.gallery`);
const markupGalleryContainer = galleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML(`beforeend`, markupGalleryContainer);

galleryContainer.addEventListener(`click`, onGalleryContainerClick);

function galleryMarkup(galleryItems) {
    
    return galleryItems.map(({ preview, original, description }) => {
        return ` <div class="gallery__item">
  <a class="gallery__link" href="${original}";>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join(``);
       
};

function onGalleryContainerClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains(`gallery__image`)) {
        return;

    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">`, {
        onShow: instance => {
            galleryContainer.addEventListener(`keydown`, onEscClick);
        },
        onClose: instance => {
            galleryContainer.removeEventListener(`keydown`, onEscClick);   
},
    })
    

    instance.show()
    
   function onEscClick (evt) {
        if (evt.key === `Escape`) {
            instance.close() 
            return
        }
    }
console.log(evt.target);
};


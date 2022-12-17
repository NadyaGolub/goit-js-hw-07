import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(`.gallery`);
const markupGalleryContainer = galleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML(`beforeend`, markupGalleryContainer);
galleryContainer.addEventListener(`click`, onGalleryContainerClick);

function galleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` 
  <a class="gallery__item" href="${original}";>
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`;
    })
    .join(``);
}
function onGalleryContainerClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains(`gallery__image`)) {
        return;

    }

    let gallery = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250});
gallery.on('show.simplelightbox', function () {
	// do something…
});
console.log(evt.target);
};
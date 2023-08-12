import { galleryItems } from "./gallery-items.js";
// Change code below this line

const takeUlGallery = document.querySelector("ul.gallery");
const galeryImeg = createGalleryImag(galleryItems);
function createGalleryImag(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img
         class="gallery__image"
         src="${preview}" 
         alt="${description}" 
         />
      </a>
    </li>`;
    })
    .join("");
}

takeUlGallery.insertAdjacentHTML("beforeend", galeryImeg);

var lightbox = new SimpleLightbox(".gallery a", {
  captions: "true",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

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
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join("");
}
takeUlGallery.insertAdjacentHTML("afterbegin", galeryImeg);

takeUlGallery.addEventListener("click", selectImg);

function selectImg(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
      <div class="modal">
          <img
            class="gallery__image"
            src="${event.target.dataset.source}"
            alt="${event.target.alt}"
          />
      </div>
  `);
  return instance.show();
}

// instance.show();

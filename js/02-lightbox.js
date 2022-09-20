import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryItemsList = createGalleryList(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryItemsList);

function createGalleryList(galleryItems) {
  return galleryItems
    .map(({ preview, original }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="Image description" />
</a>`;
    })
    .join("");
}

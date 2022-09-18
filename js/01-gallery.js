import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryItemsList = createGalleryList(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryItemsList);

gallery.addEventListener("click", onImgClik);

function createGalleryList(galleryItems) {
  return galleryItems
    .map(({ preview, original }) => {
      return `<div class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="Image description"
       />
     </a>
   </div>`;
    })
    .join("");
}

function onImgClik(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}">
    `);

  instance.show();
}

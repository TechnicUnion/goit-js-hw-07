import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryItemsList = createGalleryList(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryItemsList);

gallery.addEventListener("click", onImgClik);

function createGalleryList(galleryItems) {
  return galleryItems
    .map(({ preview }) => {
      return `<div class="gallery__item">
     <a class="gallery__link" href="${preview}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${preview}"
         alt="Image description"
       />
     </a>
   </div>`;
    })
    .join("");
}

function onImgClik() {}

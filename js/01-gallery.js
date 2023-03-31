import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector("ul.gallery");

for (const pic of galleryItems) {
  const item = `<div class="gallery__item">
  <a class="gallery__link" href="${pic.original}">
  <img
    class="gallery__image"
    src="${pic.preview}"
    data-source="${pic.original}"
    alt="${pic.description}"
  />
</a>
</div>`;
  gallery.insertAdjacentHTML("beforeend", item);
}

gallery.addEventListener("click", (ev) => {
  ev.preventDefault();
  //   if (ev.target.tagName !== "IMG") return;
  const popUpPic = basicLightbox.create(
    `<img src="${ev.target.dataset.source}">`
  );
  popUpPic.show();
});

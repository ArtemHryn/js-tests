const refs = {
  openBtn: document.querySelector('[data-action="open-modal"]'),
  closeBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openBtn.addEventListener("click", onOpenModal);
refs.closeBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackdropClick);
window.addEventListener("keydown", onEscCloseModal);

function onOpenModal(event) {
  window.addEventListener("keydown", onEscCloseModal);
  document.body.classList.add("show-modal");
}

function onCloseModal() {
  window.removeEventListener("keydown", onEscCloseModal);
  document.body.classList.remove("show-modal");
}

function onBackdropClick(event) {
  console.log("Click");
  if (event.currentTarget === event.target) {
    console.log("Wow! click on backdrop");
    onCloseModal();
  }
}

function onEscCloseModal(event) {
  console.log(event);
  if (event.code === "Escape") {
    onCloseModal();
  }
}

const tagsContainer = document.querySelector(".js-tags");
const selectedTags = new Set();

tagsContainer.addEventListener("click", onTagsContainerClickNew);

function onTagsContainerClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  const currentActiveBtn = document.querySelector(".tags__btn--active");
  // console.log((e.target));
  // if (currentActiveBtn) {
  //     currentActiveBtn.classList.remove("tags__btn--active");
  // }
  currentActiveBtn?.classList.remove("tags__btn--active"); //перевіряє тру чи фолс наш currentActiveBtn(існує чи ні)
  e.target.classList.add("tags__btn--active");
}

function onTagsContainerClickNew(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  //   console.log(e.target);
  console.log(e.target.classList.contains("tags__btn--active"));
  if (e.target.classList.contains("tags__btn--active")) {
    selectedTags.delete(e.target.dataset.value);
  } else {
      selectedTags.add(e.target.dataset.value);
  }
  e.target.classList.toggle("tags__btn--active");
  
    console.log(selectedTags);
}

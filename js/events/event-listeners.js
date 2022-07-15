const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

addListenerBtn.addEventListener("click", (event) => {
  console.log("EventListener has been added");
  targetBtn.addEventListener("click", logMessage);
});

removeListenerBtn.addEventListener("click", (event) => {
  console.log(event);
  console.log("EventLustener has been removed");
  targetBtn.removeEventListener("click", logMessage);
});

function logMessage(event) {
    console.log(event);
}

function onTargetBtnEvent() {
    console.log("click, click")
}
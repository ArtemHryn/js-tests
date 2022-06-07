/*
 * Создём и добавляем коллекцию
 */
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

// const option = colorPickerOptions[0];

// const buttonEl = document.createElement("button");
// buttonEl.type = "button";
// buttonEl.textContent = option.label;
// buttonEl.style.color = option.color;

// const element = colorPickerOptions.map((option) => {
//   const buttonEl = document.createElement("button");
//   const spanContect = document.createElement("span");
//   spanContect.innerHTML = "&#9805;";
//   spanContect.style.paddingLeft = "10px";
//   buttonEl.type = "button";
//   buttonEl.textContent = option.label;
//   buttonEl.style.color = option.color;
//   buttonEl.appendChild(spanContect);
//   return buttonEl;
// });

const makeColorPickerOptions = (option) => {
  return option.map((option) => {
    const buttonEl = document.createElement("button");
    const spanContect = document.createElement("span");
    spanContect.innerHTML = "&#9805;";
    spanContect.style.paddingLeft = "10px";
    buttonEl.type = "button";
    buttonEl.textContent = option.label;
    buttonEl.style.color = option.color;
    buttonEl.appendChild(spanContect);
    return buttonEl; //чтобы вернуть в 1й return результат map
  });
};

const buttonCollection = document.querySelector(".js-color-picker");
const element = makeColorPickerOptions(colorPickerOptions)
buttonCollection.append(...element);

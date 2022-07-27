// import throttle from "../../node_modules/lodash.throttle";

const STORAGE_KEY = "feedback-msg";

const refs = {
  form: document.querySelector(".js-feedback-form"),
  textarea: document.querySelector(".js-feedback-form  textarea"),
};

const parseJson = JSON.parse(localStorage.getItem(STORAGE_KEY))

const formData = { ...parseJson};
console.log(formData);

// populateTextarea();
populateForm();

refs.form.addEventListener("submit", onFormSubmit);
// refs.textarea.addEventListener("input", _.throttle(onTextareaInput, 2000));
refs.form.addEventListener("input", onFormInput);

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
}

// function onTextareaInput(e) {
//   const message = e.target.value;
//   console.log(message);
//   localStorage.setItem(STORAGE_KEY, message);
// }

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }
// }

function populateForm() {
    const savedForm = parseJson;
    if (savedForm) {
        for (const key in savedForm) {
            document.querySelector(`[name=${key}]`).value = savedForm[key]
      }
  }
}

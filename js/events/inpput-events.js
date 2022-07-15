const refs = {
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".js-button > span"),
  license: document.querySelector(".js-license"),
  btn: document.querySelector(".js-button"),
};

// refs.input.addEventListener('focus', onChangeBorder)
// refs.input.addEventListener('blur', onRemoveBorder)
// refs.input.addEventListener('input', onInputChange)
refs.license.addEventListener('change', onLicenseChange)

function onChangeBorder() {
    refs.input.style.border = '5px solid red'

}
function onRemoveBorder() {
    refs.input.style.border = "1px solid blue";
}

function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value
}

function onLicenseChange(event) {
    // console.log(event.currentTarget.checked);
    refs.btn.disabled = !event.currentTarget.checked; 
}

const refs = {
  btn: document.querySelector(".js-clear"),
  output: document.querySelector(".js-output"),
};

window.addEventListener('keydown', onKeyPress);
console.log('start');

refs.btn.addEventListener('click', onClear)

function onKeyPress(event) {
    console.log(event.key);
    refs.output.textContent += event.key
}

function onClear(event) {
    refs.output.textContent = ''
    console.clear()
}
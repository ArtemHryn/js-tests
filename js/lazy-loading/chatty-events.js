const coordsOutputRef = document.querySelector('.js-coords')
let mouseMoveCounter = 0

const slowdownFunction = _.throttle(onMouseMove, 1000);

window.addEventListener("mousemove", slowdownFunction);

function onMouseMove(e) { 
    mouseMoveCounter += 1

    coordsOutputRef.textContent = `Number of moves: ${mouseMoveCounter}
    X: ${e.clientX},
    Y: ${e.clientY}`
}

const inputRef = document.querySelector('.js-input')
const outPut = document.querySelector('.js-output')
let inputCbInvocationCounter = 0

inputRef.addEventListener("input", _.debounce(onInputChange, 1000));

function onInputChange(e) {
    inputCbInvocationCounter += 1
    outPut.textContent = `Number of calls: ${inputCbInvocationCounter}
    Value: ${e.target.value}`;
}
const decrementBtn = document.querySelector(".js-decrement");
const incrementBtn = document.querySelector(".js-increment");
const valueEl = document.querySelector(".js-value");
const counterBox = document.querySelector(".js-counter");

const counter = {
  value: 0,
  increment(value) {
    console.log("increment -> this", this);
    this.value += 1;
  },
  decrement(value) {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
};

decrementBtn.addEventListener("click", function () {
    counter.decrement()
    valueEl.textContent = counter.value
});
incrementBtn.addEventListener("click", function () {
  counter.increment();
  valueEl.textContent = counter.value;
});

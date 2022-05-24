const CounterPlag = function ({ selector, value = 0, step = 1 } = {}) {
  //   console.log(this);
  this._value = value;
  this._step = step;

  this._refs = this._getRefs(selector);
  this._bindEvents();
  this.updateUI();
};

CounterPlag.prototype._getRefs = function (selector) {
  // console.log(selector)

  const refs = {};
  refs.container = document.querySelector(selector);
  //   console.log(refs.container);
  refs.incrementBtn = refs.container.querySelector("[data-increase]");
  refs.decrementBtn = refs.container.querySelector("[data-decrease]");
  refs.value = refs.container.querySelector("[data-value]");

  return refs;
};

CounterPlag.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener("click", () => {
    this.increment();
    this.updateUI();
  });

  this._refs.decrementBtn.addEventListener("click", () => {
    this.decrement();
    this.updateUI();
  });
};

CounterPlag.prototype.increment = function () {
  this._value += this._step;
};

CounterPlag.prototype.decrement = function () {
  this._value -= this._step;
};

CounterPlag.prototype.updateUI = function () {
  this._refs.value.innerHTML = this._value;
};

new CounterPlag({ selector: "#counter-1", step: 5 });
// console.log("counter1", counter1);

// counter1.increment();
// console.log(counter1);

new CounterPlag({ selector: "#counter-2", step: 10, value: 20 });

new CounterPlag({ selector: "#counter-3", step: 11 });

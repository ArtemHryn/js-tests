/*
 * call и apply
 */
const showThis = function (...args) {
  console.log(args);
  console.log("ShowThis -> this", this);
};

// showThis()

// const objA = {
//     a: 5,
//     b: 10,
// };

// const arrayA = [1, 3, 6]

// showThis.call(objA, 10, 20, 30)
// showThis.apply(objA, [1, 2, 3]) //хоть и массив но передается каждый  как отдельный параметр
// showThis.apply(objA, arrayA)

const changeColor = function (color) {
  console.log("changeColor -> this", this);
  this.color = color;
};

/* чтобы не повторялась функция в каждом обьекте можно использовать call
 *  это оптимизация кода
 */
const hat = {
  color: "black",
  //   changeColor(color) {
  //     console.log("changeColor -> this", this);
  //     this.color = color;
  //   },
};

const sweater = {
  color: "green",
  //   changeColor(color) {
  //     console.log("changeColor -> this", this);
  //     this.color = color;
  //   },
};

// changeColor.call(hat, 'purple')
// console.log(hat);

// changeColor.call(sweater, 'orange')
// console.log(sweater);

/*
 * bind
 */

const changeHatColor = changeColor.bind(hat); //теперь всегда ссылаемся на hat при вызове функции changeHatColor
// changeHatColor('red')
// console.log(hat)


/*
 * counter 
 */
const counter = {
  value: 0,
  increment(value) {
    console.log("increment -> this", this);
    this.value += value;
  },
  decrement(value) {
    console.log("decrement -> this", this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
  console.log(value);
};

// updateCounter(10, counter.increment.bind(counter))
// updateCounter(5, counter.increment.bind(counter))
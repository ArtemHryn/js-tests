/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

const authemTemp = function (a, callback, callback2) {
  const minimum = callback(a);
  const maximum = callback2(a);
  return `<div class="temperature">
  <p>We checked the temparature of the autumn</p>
  <p>The highest temps is ${maximum}</p>
  <p>The lowest temps is ${minimum}</p>
  </div>`;
};

const septemberTemp = [10, 8, 9, 7];
const octoberTemp = [4, 2, 3, 6];
const novemberTemp = [5, 9, 3, 10, 11];

const autumnAllTemp = [...septemberTemp, ...octoberTemp, ...novemberTemp];

const minTemp = function (x) {
  return Math.min(...x);
};

const maxTemp = function (x) {
  return Math.max(...x);
};

document.body.insertAdjacentHTML(
  "afterbegin",
  authemTemp(autumnAllTemp, minTemp, maxTemp)
);

const btnEvent = document.querySelector(".js-button");

const changeBodyColor = function () {
  const color = ["red", "blue", "green", "yellow", "purple"];
  const min = 0;
  const max = color.length - 1;
  const index = Math.round(Math.random() * (max - min) + min);
  console.log(index);
  document.body.style.backgroundColor = color[index];
};

setTimeout(changeBodyColor, 2000)

const changeBodyColor2 = function () {
  const hexValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];
  }
  document.body.style.backgroundColor = hex;
};

btnEvent.addEventListener("click", changeBodyColor2);

/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

const filter = function (array, callback3, number) {
  const filteredArray = [];
  for (const el of array) {
    console.log(el);
    if (callback3(el, number)) {
      filteredArray.push(el);
    }
  }
  return filteredArray;
};

const higher = function (value, number) {
  return (value) >= number;
};

// console.log(filter(autumnAllTemp, higher, 4));

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

const checkFruitsPrice = function (fruit, number) {
  return fruit.quantity >= number
}

console.log(filter(fruits, checkFruitsPrice, 160))
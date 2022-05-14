const addF = function (a, b, c) {
  console.log(a, b, c);
  return a + b + c;
};

console.log(addF(5, 6, 89));

const addAr = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

console.log(addAr(5, 6, 89));

//если 1 параметр
const addAr1 = (a) => {
  return a;
};

// если 0 параметров
const addAr0 = () => {
  return `No parametrs`;
};

console.log(addAr1(5));

console.log(addAr0());

// краткая форма функции addAr без console.log
//Неявный возврат
const addAr2 = (a, b, c) => a + b + c;

//как вернуть обьект
const objArrrow = () => ({ arrow: 5 });

console.log(objArrrow().arrow);

// const onGetPositiveRestilt = function (position) {
//     console.log(position)
// }

const onGetPositiveRestilt = (position) => {
//   console.log(position);
};

// const onGetNegativeResult = function (error) {
//     console.log(error)
// }

const onGetNegativeResult = (error) => {
//   console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
  onGetPositiveRestilt,
  onGetNegativeResult
);

const filter = (array, callback3, number) => {
  const filteredArray = [];
  for (const el of array) {
    console.log(el);
    if (callback3(el, number)) {
      filteredArray.push(el);
    }
  }
  return filteredArray;
};

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

// const checkFruitsPrice = function (fruit, number) {
//   return fruit.quantity >= number;
// };

const checkFruitsPrice = (fruit, number) => fruit.quantity >= number;

console.log(filter(fruits, checkFruitsPrice, 120));

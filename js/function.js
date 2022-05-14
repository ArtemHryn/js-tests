/* stack overflow */
// function bar() {
//     console.log('bar')
//     baz();
// }

// function baz() {
//     console.log('baz')
//     bar();
// }

// function foo() {
//     console.log('foo')
//     bar();
//     baz();
// }

// foo();

// const fn = function () {
//     console.log('1')
//     const fn1 = function () {
//         console.log('2')
//         fn2()
//         return;
//     }
//     const fn2 = function () {
//         console.log('3')
//     }
//     fn1();
//     fn2();
// }

// fn();

/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// const cart1 = [4, 128, 15, 7, 192, 217, 120, 12, 25, 90];
// let total;

// const calculateTotalPrice = function (items) {
//   total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// const result = calculateTotalPrice(cart);
// const result1 = calculateTotalPrice(cart1);
// console.log(result);
// console.log(result1);

/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

// const fruits = ["Mango", "Kiwi", "Poly", "Ajax"];
// const numbers = [1, 2, 3, 4, 5];
// const things = ["клавиатура", "наушники", "часы"];

// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item)
//     }
// }

// logItems(fruits);
// logItems(numbers);
// logItems(things);

/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
const neededlogin = "poly1scute";

// const findLogin = function (allLogins, login) {
//     return allLogins.includes(login)
//       ? `Пользователь ${login} найден.`
//       : `Пользователь ${login} не найден.`;
// };

const findLogin = function (allLogins, login) {
  for (let logItem of allLogins)
    if (logItem === login) return `Пользователь ${login} найден.`;
  return `Пользователь ${login} не найден.`;
};

console.log(findLogin(logins, neededlogin));

/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19, 1];

const findSmallesNumber = function (numbers) {
  let smallestNumber = numbers[0];
  for (let number of numbers) {
    if (smallestNumber > number) {
      smallestNumber = number;
    }
  }
  return `Самое маленькое число: ${smallestNumber}`;
};

console.log(findSmallesNumber(numbers));

/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const stringJS = "JavaScript";

// const changeCase = function (string) {
//   const dividedString = string.split("");
//   let oppositeCase = "";
//   for (let character of dividedString) {
//     if (character === character.toLowerCase()) {
//       oppositeCase += character.toUpperCase();
//     } else {
//       oppositeCase += character.toLowerCase();
//     }
//   }
//   return oppositeCase;
// };

// const changeCase = function (string) {
//   const dividedString = string.split("");
//   let oppositeCase = "";

//   for (let character of dividedString) {
//     oppositeCase =
//       character === character.toLowerCase()
//         ? (oppositeCase += character.toUpperCase())
//         : (oppositeCase += character.toLowerCase());
//   }

//   return oppositeCase;
// };

// console.log(changeCase(stringJS));

/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */

// Должно получиться top-10-benefits-of-react-framework
const title = "Top 10 benefits of React framework";

const slugify = function (string) {
  const lowTitle = string.toLowerCase().split(" ").join("-");
  return lowTitle;
};

console.log(slugify(title));

/*
 * Псевдомассив arguments и Array.from и ...
 */

// const fn = function () {
//     let number = 0;
//     console.log(arguments);
//     const args = Array.from(arguments)
//     for (let arg of args) {
//         number += arg;
//     }
//     return number
// }

// console.log(fn(1, 2, 3))
// console.log(fn(1, 2, 3, 4, 5))
// console.log(fn(1, 2, 3, 4, 5, 6, 7));

// const fn = function (a, b, c, ...args) {
//   console.log(`${a} ${b} ${c}`);
//   console.log(args);
// };

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

const argsSum = function (...args) {
  let total = 0;
  for (let number of args) {
    console.log(number);
    total += number;
  }

  return total;
};

console.log(argsSum(1, 2, 3, 4));

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19, 1];

const filterNumbers = function (array, ...args) {
    const newArray = []
    
    for (let number of array) {
        if (args.includes(number)) {
            newArray.push(number)
        }
    }

    return newArray
}

console.log(filterNumbers(numbers, 1, 2, 3, 24, 7));
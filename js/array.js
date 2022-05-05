// const clients = ["Mango", "Ajax", "Poly"];
// let clientTest;
// const clientArray = [];
// for (const client of clients) {
// console.log(client);
// console.log(client.split(""));
// console.log(client.split("").join(" "));
// clientArray.splice(client.length, 0, client.split("").join(" "));
// for (const letter of client) {
//   clientArray.splice(clientArray.length, 0, letter);
// }
// }

// console.log(clientTest)
// console.log(clientArray.join("-").toLowerCase().includes("m"));
// console.log(clientArray.includes("m"));

// clientTest = clientArray.join("").toLowerCase().includes("d");

// if (clientTest) {
//   console.log("we found m")
// }

// for (const clientBase of clientArray) {
//   console.log(clientBase);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

/*
 * Посчитать общую сумму покупок в корзине
 */
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let sum = 0;

for (let i = 0; i < cart.length; i += 1) {
  sum += cart[i];
}

console.log(sum);

sum = 0;
for (const price of cart) {
  sum += price;
}
console.log(sum);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    continue;
  }

  total += numbers[i];
}

console.log(total);

total = 0;

for (const value of numbers) {
  if (value % 2 !== 0) {
    continue;
  }
  total += value;
}
console.log(total);

/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
const loginToFind = "aj4xth3m4n";
let message = `Пользователь ${loginToFind} не найден.`;
let message2 = `Пользователь ${loginToFind} не найден во втором цыкле.`;
// let message3 = `Пользователь ${loginToFind} не найдет в методе includes`

for (let i = 0; i < logins.length; i += 1) {
  if (loginToFind === logins[i]) {
    message = `Пользователь ${loginToFind} найден`;
    break;
  }
}
console.log(message);

for (const login of logins) {
  if (login === loginToFind) {
    message2 = `Пользователь ${loginToFind} найден во втором цыкле.`;
    break;
  }
}
console.log(message2);

// const correctLogin = logins.includes(loginToFind);

// if (correctLogin) {
//   message3 = `Пользователь ${loginToFind} найден в методе includes`;
// }


const message3 = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден в методе includes`
  : `Пользователь ${loginToFind} не найдет в методе includes`;

  console.log(message3);
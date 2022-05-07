/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (smallestNumber > number) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);

/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// let string = "";

// for (const friend of friends) {
//   string += friend + ",";
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

//- Потом через join()
// let string2 = friends.join(",");
// console.log(string2);

/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const oppositeCase = "JavaScript";
// const letters = oppositeCase.split("");
// let inversionString = "";
// console.log(letters);

// for (const letter of letters) {
//   if (letter === letter.toLowerCase()) {
//     inversionString += letter.toUpperCase();
//   } else {
//     inversionString += letter.toLowerCase();
//   }

/* Another way to do */
//   inversionString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }

// console.log(inversionString);

/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = "Top 10 benefits of React framework";

const lowTitle = title.toLowerCase().split(" ").join("-");
console.log(lowTitle);

// const dotted = 'İstanbul';

// console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// // expected output: "i̇stanbul"

// console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
// // expected output: "istanbul"

/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const bothArrays = array1.concat(array2);
console.log(bothArrays);

for (let arrayelement of bothArrays) {
  total += arrayelement;
}
console.log(total);

/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

// console.table(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */

// const cardToRemove = "Карточка-3";

// const index = cards.indexOf(cardToRemove)

// console.log(index)

// cards.splice(index, 1)

// console.table(cards);


/*
 * Добавление (по индексу)
 */
const cardToInsert = 'Карточка-6';
const index = 3;

cards.splice(index, 0, cardToInsert + ' splice')
cards.push('push card')

/*
 * Обновление (по индексу)
 */
// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);

// cards.splice(index, 1, cardToUpdate + ' Updated')

console.table(cards);
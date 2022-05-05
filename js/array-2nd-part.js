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
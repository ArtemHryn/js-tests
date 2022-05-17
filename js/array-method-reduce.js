/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14, 1];

const total = numbers.reduce((total, number) => total + number, 0); // 0 - чему равно total при 1 итерации
//то что функция вернет при первой итерации, вернет во 2ю как total. результат total + number вернет во 2ю итерацию как total
// console.log(total);

/*
 * Считаем общую зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
  (total, salary) => total + salary,
  0
);
// console.log(totalSalary)

/*
 * Считаем общее количество часов
 */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

const totalTime = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0
);
// console.log(totalTime);

/*
 * Считаем общую сумму товаров корзины
 */
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalPrice = cart.reduce(
  (totalPrice, { price, quantity }) => totalPrice + price * quantity,
  0
);
// console.log(totalPrice);

/*
 * Собираем все теги из твитов
 */
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((allTags, tweet) => {
  //   allTags.push(...tweet.tags);
  // console.log(allTags)
  return [...allTags, ...tweet.tags];
}, []);

console.log(allTags);

/*
 * Ведём статистику тегов
 */

const stats = allTags.reduce((accum, tag) => {
  //как работает
  //есть пустой обьект accum и в него добавляется tag как строчка
  //const tag = "js"
  //accum["js"] обращается к массиву и если есть такая запись то увеличивает себя же на 1
  // если нет, то добавляет запись в виде accum["js"] = 1
  console.log(accum);
  if (accum[tag]) {
    // accum[tag] += 1;  //так можно но не нужно
    return {
      ...accum,
      [tag]: accum[tag] + 1,
    };
  }

//   accum[tag] = 1;
  return {
    ...accum,
    [tag]: 1,
  };
}, {});

console.log(stats);

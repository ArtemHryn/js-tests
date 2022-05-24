/*
 * Array.prototype.flat(depth)
 * - Разглаживает массив до указанной глубины
 * - По умолчанию глубина 1
 */
const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array)
// console.log(array.flat(3)) //3 это глубина на сколько нужно разложить

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// const tag = tweets.map(tweet => tweet.tags).flat()
// const tag = tweets.flatMap((tweet) => tweet.tags);
// console.log(tag);

const allTags = tweets.reduce((allTags, tweet) => {
  return [...allTags, ...tweet.tags];
}, []);

// console.log(allTags);

// const stats = tag.reduce((accum, tag) => {
//   if (accum[tag]) {
//     return {
//       ...accum,
//       [tag]: accum[tag] + 1,
//     };
//   }
//   return {
//     ...accum,
//     [tag]: 1,
//   };
// }, {});

const tag = tweets
  .flatMap((tweet) => tweet.tags)
  .reduce((accum, tag) => {
    if (accum[tag]) {
      return {
        ...accum,
        [tag]: accum[tag] + 1,
      };
    }
    return {
      ...accum,
      [tag]: 1,
    };
  }, {});

// console.log(stats)
console.log(tag)

//CHAINING

/*
 * Цепочки вызовов - chaining
 */
const numbers = [1, 5, 2, 4, 3];

const greaterThenTwo = numbers.filter((num) => num > 2);
// console.log(greaterThenTwo);

const increased = greaterThenTwo.map((num) => num * 3);
// console.log(increased);

const sorted = increased.sort((a, b) => a - b);
// console.log(sorted);

//Chain

const biggerThanTwoIncreasedThreeSorted = numbers
  .filter((num) => num > 2)
  .map((num) => num * 3)
  .sort((a, b) => a - b);
// console.log(biggerThanTwoIncreasedThreeSorted)

/*
 * Сортируем тех кто онлайн по рангу
 * - сначала фильтруем
 * - потом сортируем
 */
const players = [
  { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
  { id: "id-2", tag: "Poly", isOnline: false, rank: 600 },
  { id: "id-3", tag: "Ajax", isOnline: true, rank: 100 },
  { id: "id-4", tag: "Kiwi", isOnline: true, rank: 400 },
  { id: "id-5", tag: "Chelsy", isOnline: false, rank: 200 },
];

const onlineAndSorted = players
  .filter((active) => active.isOnline)
  .sort((lowRank, highRank) => lowRank.rank - highRank.rank);
// console.table(onlineAndSorted)

/*
 * Chaining в методах объекта как jquery
 */

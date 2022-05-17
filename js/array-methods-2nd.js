//FILTER
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
const filteredNumbers = numbers.filter((number) => number >= 4 && number <= 25);
// console.log(filteredNumbers)

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

/*
 * Получаем массив всех онлайн игроков
 */

const onlinePlayers = players.filter((player) => player.online);
// console.log(onlinePlayers);

/*
 * Получаем массив всех оффлайн игроков
 */

const offlinePlayers = players.filter((player) => !player.online);
// console.log(offlinePlayers);

/*
 * Получаем список хардкорных игроков с временем больше 250
 */

const hardCorePlayers = players.filter((player) => player.timePlayed > 250);
// console.log(hardCorePlayers);

//FIND

/*
 * Array.prototype.find()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию или undefined
 */

const playerIdToFind = "player-3";

const finder = players.find((player) => player.id === playerIdToFind);
// console.log(finder);

const playerFinder = (allPlayers, playerIdToFind) => {
  return allPlayers.find((player) => player.id === playerIdToFind);
};

// console.log(playerFinder(players, playerIdToFind));

//EVERY-SOME
/*
 * Array.prototype.every()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 */

const isAllOnline = players.every(player => player.online)
console.log(isAllOnline); //must be false if 1 is offline

/*
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */

const isSomeOnline = players.some(player => player.online)
console.log(isSomeOnline); //must be true if even 1 online
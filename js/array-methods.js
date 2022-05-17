const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

//Примеры просто и стрелочной функции
const numbersX2 = numbers.map((number) => number * 2);
// console.log(numbersX2)

const numbersX22 = numbers.map(function (number) {
  return number * 2;
});
// console.log(numbersX22);

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: true },
];

const friendsName = friends.map((friend) => friend.name);

// console.log(friendsName)

const newNumber = [];
numbers.forEach(function (number, index, array) {
  if (number > 5) {
    newNumber.push(index);
  }
});

// console.log(numbers)
// console.log(newNumber)

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

//вернуть имена игроков в масиве
const playersName = players.map((player) => player.name);

// console.log(playersName)

//Витащить 2 свойсва и больше

// const playersNameTime = players.map(({ name, timePlayed }) => {
//   return ({name, timePlayed})
// })
const playersNameTime = players.map(({ name, timePlayed }) => ({
  name,
  timePlayed,
}));

// console.log(playersNameTime)

/*
 * Увеличиваем кол-во часов игрока по id
 */

const increaseTimePlayer = players.map(({ timePlayed }) => timePlayed + 100);
// console.log(increaseTimePlayer);

//by id
const neccessaryPlayer = "player-2";
const updatedPointsPlayers = players.map((player) => {
  return {
    ...player,
    points: player.points + 20, // перезапишит текущий points
  };
});

// console.log(updatedPointsPlayers)

const updatePlayerTime = players.map((player) => {
  // if (neccessaryPlayer === player.id) {
  //   return {
  //     ...player,
  //     timePlayed: player.timePlayed + 20,
  //   };
  // }
  // return player;
  //тернарная запись
  return neccessaryPlayer === player.id
    ? {
        ...player,
        timePlayed: player.timePlayed + 200,
      }
    : player;
});

console.log(updatePlayerTime);


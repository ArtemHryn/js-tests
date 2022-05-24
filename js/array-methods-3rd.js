/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */
const numbers = [1, 9, 6, 2, 3, 12];
// numbers.sort();
// console.log(numbers);

/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */

numbers.sort((curEL, nextEl) => {
  //в порядку возрастания
  return curEL - nextEl;
});

// numbers.sort((curEL, nextEl) => nextEl - curEL) //в порядку убывания

// console.log(numbers)

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */

// const copyNumber = [...numbers]

const sortedNumber = [...numbers].sort((curEL, nextEl) => curEL - nextEl);


/*
 * Кастомная сортировка сложных типов
 */
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const byBestPlayers = [...players].sort((prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed)
// console.log(byBestPlayers)

//так как сравнивается юникод то можно сравнить их
const sortedByName = [...players].sort((prevPlayer, nextPlayer) => {
    const result = prevPlayer.name[0] > nextPlayer.name[0]
    if (result) {
        return 1;
    } else if(!result) {
        return -1
    }
});
console.table(sortedByName)
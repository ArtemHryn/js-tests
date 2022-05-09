/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const Myplaylist = {
  name: "My playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  trackcount: 3,
  favorite: "track-1",
  changeName(newName) {
    this.name = newName;
  },
  addTrack(newTrack) {
    this.tracks.push(newTrack);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    this.tracks.length;
  },
  addNewObject(objectName) {
    return (this[objectName] = this.tracks.length); //добавить новое свойство со значением
  },
};

Myplaylist.changeName("1234");
Myplaylist.addTrack("track-4");
Myplaylist.addNewObject("numberOfTracks");
console.log(Myplaylist);

/*
 * Перебор через for...in и Object.keys|values|entries
 */

const feedback = {
  good: 3,
  normal: 10,
  bad: 1,
};

let totalFeedbacks = 0;
const keys = Object.keys(feedback);

for (let key of keys) {
  console.log(feedback[key]);
  totalFeedbacks += feedback[key];
}

console.log(totalFeedbacks);

const songs = {
  english: 12,
  ukrainian: 24,
  turkish: 10,
};

let totalSongs = 0;

const values = Object.values(songs);

for (let value of values) {
  totalSongs += value;
}

console.log(values);
console.log(totalSongs);

/*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: true },
];

/*
 * Ищем друга по имени
 */

const findFriendByName = function (allFriends, friendName) {
  let message = `${friendName} hasn't been found`;
  for (let friend of allFriends) {
    if (friend.name === friendName) {
      message = `${friendName} has been found`;
      return message;
    }
  }
  return message;
};

console.log(findFriendByName(friends, "Poly"));
console.log(findFriendByName(friends, "Chelsy"));

/*
 * Получаем имена всех друзей
 */

const findAllFriends = function (allFriends) {
  const allFriendsName = [];
  for (let friend of allFriends) {
    allFriendsName.push(friend.name);
  }
  return allFriendsName;
};

console.log(findAllFriends(friends));

/*
 * Получаем имена только друзей которые онлайн
 */

const findOnlineFriends = function (allFriends) {
  const onlineFriends = [];
  for (let friend of allFriends) {
    if (friend.online) {
      onlineFriends.push(friend.name);
    }
  }
  return onlineFriends;
};

console.log("online friends: ", findOnlineFriends(friends));

// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй

const friendsStatus = function (allFriends) {
  const friendsList = {
    online: [],
    offline: [],
  };
  for (let friend of allFriends) {
    // friend.online
    //   ? friendsList.online.push(friend.name)
    //       : friendsList.offline.push(friend.name);
      friendsList[friend.online ? 'online' : 'offline'].push(friend.name)
    }
    return friendsList
};


console.log(friendsStatus(friends));

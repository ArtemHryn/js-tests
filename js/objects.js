// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   trackcount: 3,
//   favorite: "track-1",
// };

// const favoriteTrack = "favorite";

// console.log(playlist.tracks);
// console.log(playlist[favoriteTrack]);

/*
 * Короткая запись свойств
 */

const username = "Artem.Hryn";
const email = "email@gmail.com";

// const user = {
//   username: username,
//   email: mail,
// };

const user = {
    username,
    email,
}


console.log(user);

const inputName = 'color';
const inputValue = 'red'

const backgroundColor = {
    [inputName]: inputValue,
}

console.log(backgroundColor)

const Myplaylist = {
  name: "My playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  trackcount: 3,
  favorite: "track-1",
};

Myplaylist.followers = 2;

console.log(Myplaylist)

const arrayTest = [1, 2, 3, 4]

arrayTest.additional = '1234'

arrayTest.push(5)
arrayTest.aaddd = '123'

console.log (arrayTest.length) //5
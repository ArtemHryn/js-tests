/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// const a = [1, 3, 5]
// const b = [2, 4, 6]
// const c = [1, 9, 3]

// const numbers = [...a, ...b, ...c]
// console.log(numbers)

/*
 * Поиск самой маленькой или большой температуры (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

console.log("Max:", Math.max(...temps), "Min:", Math.min(...temps));

const a = { x: 4, y: 3 };
const b = { x: 3, z: 4 };

// const c = Object.assign({}, a, b)
const c = { ...a, ...b };

console.log(c);

// const rgb = [200, 255, 100];
// let red, green, blue;

// [red, green, blue] = rgb;
// red = 100;

// console.log(`R:${red},G:${green},B:${blue}`);

// const myTestArray = [
//   { name: "apple", price: 50 },
//   { name: "grape", price: 70 },
//   { name: "lemon", price: 60 },
//   { name: "strawberry", price: 110 },
// ];

// const checkArray = function (array) {
//     for (let myTestArrayItem of array) {
//         const { name, price } = myTestArrayItem;
//         console.log(`${name} costs ${price}`)
//     }
// }

// checkArray(myTestArray)

// const profile = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const showProfile = function ({ name, tag, location, ...restProps }) {
// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views: myViews, likes },
// } = profile;
//   console.log(name, tag, location);
//   console.log(restProps)
// };

// showProfile(profile);

// const { name, tag, location, avatar, stats: {followers, views: myViews, likes} } = profile
// console.log(myViews)

// const props = [
//   { id: 1, name: 'Fizz'},
//   { id: 2, name: 'Buzz'},
//   { id: 3, name: 'FizzBuzz'}
// ];

// const [, { name: secondName }, { name: cartName }] = props;

// console.log(secondName, cartName); // "FizzBuzz"

const profile = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar:
    "https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/1bbe7/Twitter-NFT-profile.jpg",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const makePersonProfile = function (userProfie) {
  const {
    name = "https://i.pravatar.cc/400?img=6",
    tag,
    location = "Beatiful Place",
    avatar,
    stats: { followers, views, likes },
  } = profile;

  return `<div>
    <img src="${avatar}" alt="user avatar" width="270">
    <p>${name}<span>@${tag}</span></p>
    <p>Location: ${location}</p>
    <ul>
      <li>Followers: ${followers}</li>
      <li>Views: ${views}</li>
      <li>Likes: ${likes}</li>
    </ul>
  </div>`;
};

makePersonProfile(profile)

document.body.insertAdjacentHTML("afterbegin", makePersonProfile(profile));
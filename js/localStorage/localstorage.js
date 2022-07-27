const user = {
  name: "Artem",
  age: 28,
};

// console.log(user);
// console.log(JSON.stringify(user));

const jsonUser = '{"name":"Artem","age":28}';
// console.log(JSON.parse(jsonUser));

console.log(localStorage);
localStorage.setItem("my-data", "sometext");
localStorage.setItem('my-user', JSON.stringify(user))

console.log(localStorage.getItem("my-user"));

console.log(JSON.parse(localStorage.getItem("my-user")));
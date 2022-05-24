/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

const objA = {
  a: 7,
};

const objB = Object.create(objA);

objB.b = 10;

const objC = Object.create(objB);
objC.c = 9;

objC.a = 123423;

// console.log(objC);

// console.log(objA.hasOwnProperty('b'));

/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

const Car = function ({ brand, model, price } = {}) {
  //по умолчанию хотя бы пустой параметр чтобы избежать ошибки
  //   const { brand, model, price } = config; // сразу запишем в приеме параметров
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.changePrice = function (newPrice) {
    this.price = newPrice;
  };
};

const myCar = new Car({
  brand: "Audi",
  model: "Q3",
  price: 35000,
});
// console.log(myCar);

const myCar2 = new Car({ brand: "BMW", model: "X6", price: 50000 });
// console.log(myCar2);

// myCar2.changePrice(1200000)
// console.log(myCar2);

const User = function ({ email, pswd } = {}) {
  this.email = email;
  this.pswd = pswd;
};

User.prototype.changeEmail = function (email) {
  this.email = email
}

const cherry = new User({ email: "cherry@test.com", pswd: "veryStrongPswd" });

// console.log(cherry)
// cherry.changeEmail('apple@test.ua')
// console.log(cherry);

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()

User.message = 'static message not in __proto__'

//если не задаем User.prototype.функия то cherry не увидет это
User.logInfo = function (obj) {
  console.log('User.logInfo -> obj', obj)
};

User.logInfo(cherry)
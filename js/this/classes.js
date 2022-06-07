/*
 * Классы
 * 🐷 - объявление
 * 🐷 - конструктор
 * 🐷 - методы
 * 🐷 - static
 * 🐷 - приватные свойства
 * 🐷 - синтаксис публичных свойства и методы классов
 * 🐷 - геттеры и сеттеры
 */
// console.log("Hi");

class Car {
  static tax = 1.2;

  static logInfo(carObj) {
    console.log("carObj", carObj);
  }
  #private = "private"; // сделать приватную переменную

  constructor({ brand, model, price } = {}) {
    console.log("constructor выполняется первым");
    console.log(this.#private);
    // console.log(this)

    this.a = 10;
    this._brand = brand;
    this._model = model;
    this.price = price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }

  get brand() {
    return this._brand
  }

  // setModel(newModel) {
  //   this.model = newModel;
  // }
  //правильный способ создать метод
  set model(newModel) {
    this._model = newModel
  }

  // getModel() {
  //   return this.model;
  // }
  //правильный способ создать метод
  get model() {
    return this._model; //не могут называться так же как и метод поэтому в this._model есть _
  }
}

const callCar = new Car({ brand: "Audi", model: "Q3", price: 35000 });

console.log(callCar);

// callCar.setModel('A7')

// console.log(callCar.getModel());

// callCar.model = 'A7'

// console.log(callCar.model)

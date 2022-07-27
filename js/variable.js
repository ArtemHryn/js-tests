// const age = 28;
// const float_number = 125.87;
// const firstName = "Artem";
// const message = "Very and very long message";
// const isFree = false;

// const myDescr = `Hello, I am ${firstName}, I am ${age} and wanted to say ${message}`;
// console.log(myDescr);

// let varType = typeof age;
// console.log(varType);
// varType = typeof float_number;
// console.log(varType);
// varType = typeof firstName;
// console.log(varType);
// varType = typeof isFree;
// console.log(varType);

// const arte = 22;
// const gr = 'trone';

// const arteNumTest = Number(arte);
// console.log(Number.isNaN(arteNumTest));

// const grTest = Number.isNaN(Number(gr));
// console.log(grTest);

//input

//const confirmationY = confirm('Do you want to renew sub');
//console.log(confirmationY);

//let promptTest = prompt('enter the number');
//promptTest = Number(promptTest);
//console.log(promptTest);

//numbers

// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth); //parseFloat
// console.log(elementWidth);

// let salary = 1345.810123559;
// salary = salary.toFixed(2);
// salary = Number(salary);
// console.log(salary);
// salary = Number(salary.toFixed(1));
// console.log(salary);

//степень
// let base = prompt('Enter the number');
// let power = prompt('enter power');
// base = Number(base);
// power = Number(power);

// const result = base ** power;
// console.log(result);

//random

// const randomNum = Math.round(Math.random() * (80 - 30) + 30);
// randomNum = randomNum * (100 - 20) + 20;
// randomNum = Math.round(randomNum);
// console.log(randomNum);

// const color = ['red', 'blue', 'green', 'yellow', 'purple'];
// const min = 0;
// const max = color.length - 1;

// const index = Math.round(Math.random() * (max - min) + min);
// console.log(index);
// document.body.style.backgroundColor = color[index];

/*-----------------------strings------------------- */

// const messageT = 'Some text to calculate the number of symbols';
// console.log(messageT.length);

// const brand = "sAmsuNG";

// const brand_result = brand[0].toUpperCase() + brand.slice(1).toLowerCase();
// console.log(brand_result);

// const string1 = "Привет, я принц Абдул, это не спам, предлагаю тебе миллион!";
// const string2 = "Самая большая РАСПРОДАЖА этой недели, не пропустите!";
// const string3 = "Рекламная кампания #fatlivesmatter";

// const spam = 'спам';
// const sellery = 'распродажа';

// console.log(string1.includes(spam));
// console.log(string2.includes(sellery))
// console.log(string3.includes(sellery));

// const stringTrans = string2.toLowerCase();

// console.log(stringTrans.includes(sellery))

//--------------------------comparison---------------

// console.log(Math.floor(3.3)); //3
// console.log(Math.ceil(1.2)); // 2

// const x1 = 10;
// const x2 = 40

// console.log(age < x1 && age < x2);
// console.log(age < x1 || age < x2);
// console.log(!(0));

//the 1st task
// let balance = 10000;
// const payment = 2000;
// let paymentMessage;

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`
// );

// if (balance > payment) {
//   balance = balance - payment;
//   paymentMessage = `На счету осталось ${balance} кредитов`;
// } else {
//   paymentMessage = "На счету недостаточно средств для проведения операции!";
// }

// console.log(paymentMessage);
// console.log("Операция завершена");

//the 2nd task

// const totalSpent = 2000;
// let payment = 500;
// let discount = 0;
// let price;

// if (totalSpent >= 100 && totalSpent <= 1000) {
//   discount = 0.02;
// } else if (totalSpent > 1000 && totalSpent <= 5000) {
//   discount = 0.05;
// } else if (totalSpent > 5000) {
//   discount = 0.1;
// } else if (totalSpent < 100) {
//     discount = 0;
// }
// price = payment - payment * discount;

// console.log(`Оформляем заказ на сумму ${price} со скидкой ${discount * 100}%`);

/*
Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает 
значение в параметре maxLength.

Дополни код функции так, что если длина строки:

не превышает maxLength, функция возвращает её в исходном виде.
больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", 
после чего возвращает укороченную версию.
 */

/*

За допомогою методу prompt() отримайте спочатку ім'я користувача,
// потім рік народження і збережіть у 2 змінні. Обчисліть вік користувача та виведіть
// його в абзаці за допомогою alert() у такому форматі "Антон: 24".
// Визначте залишок від розподілу кількості років на 10. Залежно від цього виведіть в абзаці
// "Антон: 21 рік" або "Антон: 24 роки" або "Антон: 25 років".
// Тобто. всім чисел з першого в кінці має бути "_1 рік", для чисел з 2,3,4
// наприкінці - "_3 роки", а всіх інших - "_7 років".
// Ви можете використовувати для цього умовні конструкції if...else або switch...case.

*/

// const firstName = prompt("Введіть ім'я");
// const age = prompt("Enter your age");
// const currentYear = 2022;
// // alert(`${firstName}: ${currentYear - age}`);

// const years = (currentYear - age) % 10;

// let result;
// switch (years) {
//   case 1:
//     result = "pік";
//     break;
//   case 4:
//   case 2:
//   case 3:
//     result = "роки";
//     break;
//   default:
//     result = 'років'
// }

//Напишіть програму на JavaScript, щоб знайти повторювані значення в масиві JavaScript.
//result[4, 7]
const arr5 = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];

// const repeatedNum = arr5.filter((number, index) => arr5.indexOf(number) !== index
// )

// console.log([...new Set(repeatedNum)]);

//Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
{
  /* <button type="button" id="hide">Нажмите, чтобы спрятать текст"<button/>
<div id="text">Текст</div> */
}

// const refs = {
//   hideBtn: document.querySelector('#hide'),
//   textEl: document.querySelector('#text')
// }

// refs.hideBtn.addEventListener('click', hideText)

// function hideText() {
//   // refs.textEl.innerHTML = ''
//   // refs.textEl.style.display = 'none'
//   // refs.textEl.classList.add('hidden')
//   // refs.textEl.hidden = true
// }

const refs = {
  fieldEl: document.querySelector(".football-field"),
  ballEl: document.querySelector(".ball"),
};

// refs.fieldEl.addEventListener("mousemove", moveBall);
refs.fieldEl.addEventListener("mouseover", moveBall);
// refs.fieldEl.addEventListener("mouseout", moveBall);
console.dir(refs.ballEl.clientWidth);
function moveBall(e) {
  let ballPositionX = e.clientX - refs.ballEl.clientWidth / 2
  let ballPositionY = e.clientY - refs.ballEl.clientHeight / 2
  const halfBallWidth = refs.ballEl.clientWidth / 2
  const halfBallHeight = refs.ballEl.clientHeight / 2
  console.log(e);
  // console.log("clientX: ", e.clientX, "clientY: ", e.clientY);
  console.log(e.target.getBoundingClientRect());
  const { bottom, right } = e.target.getBoundingClientRect();
  if (bottom < e.clientY + halfBallHeight) {
    ballPositionY = bottom / 2
  }
    if (right < e.clientX + halfBallWidth) {
      ballPositionX = right / 2;
    }
  refs.ballEl.style.left = `${ballPositionX}px`;
  refs.ballEl.style.top = `${ballPositionY}px`;
}

/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */

// const fnA = function (parameter) {
//     const innerVariable = 'Значение функции fnA'

//     const innerFunction = function () {
//         console.log(parameter)
//         console.log(innerVariable)
//         console.log('call innerFunction')
//     }
//     return innerFunction
// }

// const fnB = fnA(123);
// fnB()

/*
 * Поварёнок
 */

const makeDish = function (sheffName, dish) {
  console.log(`${sheffName} cook ${dish}`);
};

// makeDish("Mango", "пирожок");
// makeDish("Mango", "Диня");
// makeDish("Mango", "бутер");
// makeDish("Poly", "пирожок");
// makeDish("Poly", "Диня");
// makeDish("Poly", "бутер");

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} cook ${dish}`);
  };
  return makeDish;
};

const make = makeSheff("Mango");

make("Пиріжочек");
make("бутер");
make("Диня");

/*
 * Округлятор 🤷‍♂️
 */

const rounder = function (place) {
  const roundTo = function (number) {
    return Number(number.toFixed(place));
  };
  return roundTo;
};

const rounder3 = rounder(3);
const rounder2 = rounder(2);

console.log(rounder2(3.1234453));
console.log(rounder3(3.1234453));

/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */

//Мы не допускаем прямое изменение зарплаты, а только методами raise, lower
const salaryManagerFactory = function (employeeName, baseSalary = 0) {
  let salary = baseSalary;

  const raise = function (amount) {
    if (amount > 1000) {
      return "Ты офигел?";
    }

    salary += amount;
    return salary;
  };
  const lower = function (amount) {
    salary -= amount;
    return salary;
  };
  const current = function () {
    return `Текущая зарпалата ${employeeName} - ${salary}`;
  };
  return {
    raise,
    lower,
    current,
    //Второй способ как вернуть методы

    //     raise(amount) {
    //       if (amount > 1000) {
    //         return "Ты офигел?";
    //       }

    //       salary += amount;
    //     },
    //     lower(amount) {
    //       salary -= amount;
    //     },
    //     current() {
    //       return `Текущая зарпалата ${employeeName} - ${salary}`;
    //     },
  };
};

const salaryManage = salaryManagerFactory("Header", 10000);

console.log(salaryManage.current());
console.log(salaryManage.raise(1000));
console.log(salaryManage.lower(500))

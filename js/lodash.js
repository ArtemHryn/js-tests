/*
 * isEmpty()
 */

// console.log(_.isEmpty({ a: 1 }));

/*
 * get()
 *
 * - user && user.location && obj.location.city
 * - user?.location?.city
 */

const user = {
  name: "Artem",
  location: {
    city: "Kyiv",
    street: "Time sq",
  },
};

// console.log(_.get(user, 'location.street'))

/* Это нужно потому что если задать console.log(user.location.streen) будет ошибка ведь:
 * сначала проверяется user.location и если такого не будет то вернет undefined и потом будет ошибка
 * ведь будет проверять undefined.streen
 */

//new style to check
// console.log(user?.location?.street)

/*
 * union()
 */

const numbers = [2, 1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90, 2];

// console.log(_.union(cart, numbers))

/*
 * range()
 */

// console.log(_.range(0, 5)) //0 это первое значение, 5 до какого значение(не включае само число) и можно задать интервал
// console.log(_.range(5));
// console.log(_.range(0, 100, 10))

/*
 * sortBy()
 */

const fruits = [
  { name: "apple", price: 80 },
  { name: "strawberry", price: 110 },
  { name: "apple", price: 50 },
  { name: "grape", price: 70 },
  { name: "lemon", price: 60 },
];

console.log(_.sortBy(fruits, ["name", "price"]));
console.log(_.sortBy(fruits, 'price'))


/*
 * sum() и sumBy()
 */

console.log(_.sumBy(fruits, 'price'))
console.log(_.sum(numbers))

/*
 * uniq() и uniqBy()
 * sortedUniq() и sortedUniqBy()
 */


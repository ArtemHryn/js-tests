/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: 'apple', price: 50 }
 * { name: 'grape', price: 70 }
 * { name: 'lemon', price: 60 }
 * { name: 'strawberry', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    const { items } = this;
    for (let item of items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };
    items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;
    const { name } = items;
    for (let item of items) {
      if (item.name === productName) {
        items.splice(items.indexOf(name), 1);
        return `The element ${productName} has been deleted`;
      }
    }
    return `The element ${productName} hasn't been found`;
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let totalPrice = 0;
    let message = "";
    for (const { price, name, quantity } of items) {
      totalPrice += price * quantity;
      message += `${name} `;
    }

    return `Total Price of ${message}: ${totalPrice}`;
  },
  increaseQuantity(productName) {
    const { items } = this;
    for (const item of items) {
      if (item.name === productName) {
        item.quantity += 1;
        return;
      }
    }
  },
  decreaseQuantity(productName) {
    const { items } = this;
    for (const item of items) {
      if (item.name === productName && item.quantity > 0) {
        item.quantity -= 1;
        return;
      } else {
        items.splice(items.indexOf(item.name), 1);
      }
    }
  },
};

cart.add({ name: "apple", price: 50 });
cart.add({ name: "grape", price: 70 });
cart.add({ name: "lemon", price: 60 });
cart.add({ name: "strawberry", price: 110 });

console.log(cart.remove("grape"));

console.log(cart.getItems());

console.log(cart.countTotalPrice());
cart.add({ name: "apple", price: 50 });
cart.add({ name: "apple", price: 50 });
cart.add({ name: "strawberry", price: 110 });
cart.increaseQuantity("grape");
cart.decreaseQuantity("apple");
console.table(cart.getItems());
console.log(cart.countTotalPrice());

// cart.clear()

// console.log(cart.getItems());

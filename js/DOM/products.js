import exportedArray from "../../data/proucts.js";
/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

/*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement("article");
  productEl.classList.add("product");

  const titleEl = document.createElement("h2");
  titleEl.classList.add("product__name");
  titleEl.textContent = name;

  const descriptionEl = document.createElement("p");
  descriptionEl.classList.add("product__descr");
  descriptionEl.textContent = description;

  const priceEl = document.createElement("p");
  priceEl.classList.add("product__pridct");
  priceEl.textContent = `price: ${price}`;

  productEl.append(titleEl, descriptionEl, priceEl);

  return productEl;
};

const elements = exportedArray.map(makeProductCard);

document.querySelector(".js-products").append(...elements);

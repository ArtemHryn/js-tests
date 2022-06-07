const titleEl = document.createElement("h1");
titleEl.classList.add("page-title");
titleEl.textContent = "The new title";
// console.log("titleEl", titleEl);
//appendChild - добавляет в конец

const imageEl = document.createElement("img");
imageEl.src =
  "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg";
imageEl.alt = "Paris";
imageEl.width = "340";
// document.body.appendChild(imageEl);

const navItemEl = document.createElement("li");
navItemEl.classList.add("site-nav__item");
navItemEl.style.backgroundColor = "blue";
navItemEl.style.color = "red";

const navLinkEl = document.createElement("a");
navLinkEl.href = "#";
navLinkEl.textContent = "the new link";
navLinkEl.classList.add("site-nav__link");

navItemEl.appendChild(navLinkEl);
// console.log("navItemEl", navItemEl)

const navEl = document.querySelector(".site-nav");
// navEl.appendChild(navItemEl);

navEl.insertBefore(navItemEl, navEl.firstChild);

const heroEl = document.querySelector(".hero");
// heroEl.appendChild(titleEl).appendChild(imageEl);

heroEl.append(titleEl, imageEl) //передать несколько элементов сразу
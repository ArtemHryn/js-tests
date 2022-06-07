const title = document.querySelector(".title");
title.innerHTML = '<a href="#" class="link">Link</a>'; //Удаляет даже теги что внутри
const linkEl = document.querySelector(".link");
linkEl.style.color = "red";

title.insertAdjacentHTML("afterbegin", '<a href="#" class="link">Link123</a>');
const linkEl2 = document.querySelector(".link");
linkEl2.style.fontSize = "90px";

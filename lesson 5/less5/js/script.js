
let menu = document.querySelector(".menu"),
    menuItems = document.querySelectorAll(".menu-item"),
    menuItem = document.createElement("li"),
    columns = document.querySelectorAll(".column"),
    adv = document.querySelector(".adv"),
    title = document.getElementById("title"),
    getPrompt = document.getElementById("prompt"),
    question = prompt('Как вы относитесь к технике apple ?', '');

menu.appendChild(menuItem);

menuItem.classList.add("menu-item");
menuItem.textContent = "Пятый пункт";

menu.insertBefore(menuItems[2], menuItems[1]);

title.textContent = "Мы продаем только подлинную технику Apple";

document.body.style.background = "url(../less5/img/apple_true.jpg)";

columns[1].removeChild(adv);

getPrompt.innerHTML = question;


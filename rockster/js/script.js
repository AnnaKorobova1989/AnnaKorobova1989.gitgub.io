'use strict';

const links = document.querySelectorAll('.main-menu__link');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    const currentLink = document.querySelector(".main-menu__link--active");
    currentLink.classList.remove("main-menu__link--active");
    links[i].classList.add("main-menu__link--active");
  });
};


'use strict';
const burgerMenu = document.querySelector('.burger-menu');
const mainMenu = document.querySelector('.main-menu');

burgerMenu.addEventListener ("click", function(evt) {

  evt.preventDefault();
  burgerMenu.classList.toggle('active');
  mainMenu.classList.toggle('active');
})

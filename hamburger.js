console.log("Hello!");

const ul = document.querySelector("nav ul");
console.log(ul);
const burgerButton = document.getElementById("burger-button");
console.log(burgerButton);

const menuCloseIcon = document.getElementById("menu-close");
console.log(menuCloseIcon);
const menuOpenIcon = document.getElementById("menu-open");
console.log(menuOpenIcon);

function handleHamburgerButtonClick() {
  console.log("button Clicked");
  ul.classList.toggle("visible");
  menuCloseIcon.classList.toggle("visible");
  menuOpenIcon.classList.toggle("visible");
}

burgerButton.addEventListener("click", handleHamburgerButtonClick);

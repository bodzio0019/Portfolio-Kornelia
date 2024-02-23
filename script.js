const date = new Date();
const year = date.getFullYear();
const parag = document.querySelector(".year");

(() => {parag.innerHTML = `&copy; ${year} All rights reserved`})();
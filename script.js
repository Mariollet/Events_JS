// Fonctionnalité 1

const footer = document.getElementsByTagName("footer")[0];
footer.addEventListener("click", () => {console.log("Clique")});

// Fonctionnalité 1 - bis

let counter = 0;
footer.addEventListener("click", () => {console.log(`Clique ${counter++}`)});

// Fonctionnalité 2

const navbarBtn = document.getElementsByClassName("navbar-toggler")[0];
const navbarHeader = document.getElementById("navbarHeader");

navbarBtn.addEventListener("click", () => {navbarHeader.classList.toggle("collapse")});

// Fonctionnalité 3

const card_1 = document.getElementsByClassName("card")[0];
const card_1_edit = card_1.childNodes[3].childNodes[3].childNodes[1].childNodes[3];


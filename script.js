// Fonctionnalité 1

const footer = document.getElementsByTagName("footer")[0];
footer.addEventListener("click", () => {console.log("Clique")});

// Fonctionnalité 1 - bis

let counter = 0;
footer.addEventListener("click", () => {console.log(`Clique ${counter++}`)});

// Fonctionnalité 2

const navbar = document.getElementsByClassName("navbar-toggler")[0];
const navbarHeader = document.getElementById("navbarHeader");

navbar.addEventListener("click", () => {navbarHeader.classList.toggle("collapse")});

// Fonctionnalité 3
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

card_1_edit.addEventListener("click", () => {card_1.style.color = "red"});

// Ou en sélectionnant le texte :
// const card_text = card_1.childNodes[3].childNodes[1]
// card_1_edit.addEventListener("click", () => card_text.style.color = "red");

// Fonctionnalité 4

const card_2 = document.getElementsByClassName("card")[1];
const card_2_edit = card_2.childNodes[3].childNodes[3].childNodes[1].childNodes[3];

card_2_edit.addEventListener("click", () => {card_2.style.color = (card_2.style.color === 'red') ? "#212529" : 'red'});





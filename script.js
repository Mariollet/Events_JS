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

card_2_edit.addEventListener("click", () => {card_2.style.color = (card_2.style.color === 'green') ? "#212529" : 'green'});

// Ou ...

// card_2_edit.addEventListener("click", () => {
//  if (card_2.style.color === 'green') {
//    card_2.style.color = '#212529' ;
//    }
//  else {
//    card_2.style.color = 'green' ;
//    }
//  });


// Fonctionnalité 5

const header = document.getElementsByTagName("header")[0];
const link = document.getElementsByTagName("link")[0];

header.addEventListener("dblclick", () => { link.disabled ? link.disabled = false : link.disabled = true });

// Ou ...

// header.addEventListener("dblclick", () => {
//   if (link.disabled == false) {
//   link.disabled = true;
//   }
//   else{
//   linkz.disabled = false;}
// });


// Fonctionnalité 6

const cards = document.getElementsByClassName("card")
for (let card of cards) {

  const card_edit = card.childNodes[3].childNodes[3].childNodes[1].childNodes[1];
  const card_text = card.childNodes[3].childNodes[1];
  const card_img = card.childNodes[1];

  card_edit.addEventListener("mouseover", () => {
    card_text.classList.toggle("collapse")
    card_img.style.width = (card_img.style.width === '20%') ? '100%' : '20%' 
});
}

// Ou ...
  
// const cards = document.getElementsByClassName("card")
// for (let card of cards) {

//   const card_edit = card.childNodes[3].childNodes[3].childNodes[1].childNodes[1];
//   const card_text = card.childNodes[3].childNodes[1];
//   const card_img = card.childNodes[1];

//   card_edit.addEventListener("mouseover", () => { 

//     card_text.classList.toggle("collapse")
//     if (card_img.style.width === "20%") {
//       card_img.style.width = "100%";
//       card_img.style.height = "100%";
//     }
//     else {
//       card_img.style.width = "20%";
//       card_img.style.height = "20%";
//     }
//   });
// }


// Fonctionnalité 7

const right_btn = document.getElementsByClassName("btn")[1]
const carousel = document.getElementsByClassName("row")[1]
const last_card = carousel.childNodes[11]
const first_card = carousel.childNodes[1]
console.log(last_card)
console.log(first_card)
console.log(carousel)
console.log(carousel.childNodes)


right_btn.addEventListener("click", () => {carousel.insertBefore(last_card,first_card)});
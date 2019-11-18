// Fonctionnalité 1

const footer = document.getElementsByTagName("footer")[0];
footer.addEventListener("click", () => {console.log("Clique")});

// Fonctionnalité 1 - bis

let counter = 0;
footer.addEventListener("click", () => {console.log(`Clique ${counter++}`)});

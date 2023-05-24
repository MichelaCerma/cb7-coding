//Esercizio 1 avanzato

let persona = ["Mario", "Rossi"];
let [
  name = "non definito",
  surname = "non definito",
  country = "non definito",
] = persona;

// console.log(name);
console.log(surname);
console.log(country);

//Esercizio 2 avanzato
let book = {
  autore: "Umberto Eco",
  anno: "1093",
};

const {
  titolo = "non definito",
  autore = "non definito",
  anno = "non definito",
} = book;
console.log(titolo);
console.log(autore);

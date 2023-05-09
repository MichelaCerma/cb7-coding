//Esercizio 1

function modText() {
  pEl.textContent = "Benvenut* nel nostro sito :)!";
}

let pEl = document.querySelector(".par");
const button = document.querySelector(".btn");

button.addEventListener("click", modText);

//Esercizio 2

let inputText = document.querySelector(".inputText");
let submit = document.querySelector(".submit");
let form = document.querySelector("form");
let newPara = document.querySelector(".output");

function userSub(event) {
  event.preventDefault();
  newPara.textContent = inputText.value;
  inputText.value = "";
}
form.addEventListener("submit", userSub);

//Esericizio 3 avanzato

let inputText1 = document.querySelector(".inputText1");
let btnAdd = document.querySelector(".btnAdd");
let ulEl = document.querySelector("ul");

function addEl() {
  if (inputText1.value === "") {
    return;
  }
  let newLi = document.createElement("li");
  newLi.textContent = inputText1.value;
  ulEl.appendChild(newLi);
  inputText1.value = "";
}

btnAdd.addEventListener("click", addEl);

/*Esercizio 2 Utilizzando callbacks, ricreare la calcolatrice in forma base includento il DOM, 
pertanto non avremo più i risultati via console, ma direttamente renderizzati sulla pagina 
(qualunque interpretazione qui va bene, e qualunque grado di complessità verrà valutato positivamente,
    per es. potrete avere anche un solo operatore e due valori da sommare)*/

const qS = (element) => document.querySelector(element);
const form = qS("form");
const firstNum = qS(".firstNum");
const operator = qS(".operator");
const secondNum = qS(".secondNum");
const submit = qS(".submit");
const numReturn = qS(".numberReturn");

const sum = (firstNum, secondNum) => firstNum + secondNum;
const min = (firstNum, secondNum) => firstNum - secondNum;
const mul = (firstNum, secondNum) => firstNum * secondNum;
const div = (firstNum, secondNum) => firstNum / secondNum;

const calculator = (callback, firstNum, secondNum) => {
  return callback(firstNum, secondNum);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (operator.value) {
    case "+":
      numReturn.textContent = calculator(
        sum,
        parseInt(firstNum.value),
        parseInt(secondNum.value)
      );
      break;
    case "-":
      numReturn.textContent = calculator(
        min,
        parseInt(firstNum.value),
        parseInt(secondNum.value)
      );
      break;

    case "*":
      numReturn.textContent = calculator(
        mul,
        parseInt(firstNum.value),
        parseInt(secondNum.value)
      );
      break;

    case "/":
      numReturn.textContent = calculator(
        div,
        parseInt(firstNum.value),
        parseInt(secondNum.value)
      );
      break;
  }
});

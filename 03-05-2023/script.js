
// // Esercizio 1
let number = parseInt(prompt("inserisci il numero"));
console.log(number)

if (number %2 === 0){
    console.log("il numero è pari");
}
else {
    console.log("il numero è dispari");
}
(number %2 == 0) 


// // Esercizio 2
let number1 = parseInt(prompt("inserisci il numero"));
console.log(number1)
number1 = (number1 %2 == 0) ? (console.log("il numero è pari")) : (console.log("il numero è dispari"))



// Esercizio 3
let firstNum = parseInt(prompt("inserisci il primo numero"));
let operator = prompt("inserisci l'operatore");
let secondNum = parseInt(prompt("inserisci il secondo numero"));

switch (operator){
    case "+":
    console.log(firstNum + secondNum);
    break;
    case "-":
    console.log(firstNum - secondNum );
    break;
    case "*":
    console.log(firstNum * secondNum);
    break;
    case "/":
    console.log(firstNum / secondNum);
    default:
    console.log("operazione annullata");
}






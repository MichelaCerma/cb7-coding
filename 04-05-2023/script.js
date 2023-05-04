//Esercizio 1

let arrayLet = ["a", "b", "c", "d", "e", "f"];

let newArray = [];

for (let i = arrayLet.length - 1; i >= 0; i--) {
  let num = arrayLet[i];

  newArray.push(num);
}
console.log(arrayLet, newArray);

//Esercizio 2

let numbersIncDec = [23, 54, 2, 2344, 623];

numbersIncDec.sort(function (a, b) {
  return a - b;
});
console.log(numbersIncDec);

numbersIncDec.sort(function (a, b) {
  return b - a;
});
console.log(numbersIncDec);

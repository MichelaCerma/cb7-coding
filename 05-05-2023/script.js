// Esercizio 2

function calc() {
  let firstNum = parseInt(prompt("inserisci il primo numero"));
  let operator = prompt("inserisci l'operatore");
  let secondNum = parseInt(prompt("inserisci il secondo numero"));

  switch (operator) {
    case "+":
      console.log(firstNum + secondNum);
      break;
    case "-":
      console.log(firstNum - secondNum);
      break;
    case "*":
      console.log(firstNum * secondNum);
      break;
    case "/":
      console.log(firstNum / secondNum);
    default:
      console.log("operazione annullata");
  }
}
calc();

//Esercizio 3

function es2() {
  const myInfo = {
    name: "Michela",
    surname: "Cerma",
    age: 20,
    location: "Marche",
  };
  console.log(`il mio nome è ${myInfo.name}`);
  console.log(`il mio cognome è ${myInfo.surname}`);
  console.log(`ho ${myInfo.age} anni`);
  console.log(`abito nelle ${myInfo.location}`);
}

es2();

// es4();

function es4() {
  function calcolator(firstnum, operator, secondNum) {
    function plus() {
      return firstNum + secondNum;
    }
    function minus() {
      return firstNum - secondNum;
    }
    function mul() {
      return firstNum * secondNum;
    }
    function div() {
      return firstNum / secondNum;
    }

    if (operator === "+") {
      console.log(plus());
    } else if (operator === "-") {
      console.log(minus());
    } else if (operator === "*") {
      console.log(mul());
    } else if (operator === "/") {
      console.log(div());
    }
  }

  let firstNum = parseInt(prompt("inserisci il primo numero"));
  let operator = prompt("inserisci l'operatore");
  let secondNum = parseInt(prompt("inserisci il secondo numero"));

  calcolator(firstNum, operator, secondNum);
}

es4();

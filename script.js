const resulttxt = document.querySelector(".result");
const buttons = document.querySelector(".calcbtns");

let result = 0;
let no1 = 0;
let no2 = 0;
let selectionNo = 0;
let operation = "none";

function Operate(no1, no2, operation) {
  switch (operation) {
    case "add":
      result = no1 + no2;
      break;
    case "sub":
      result = no1 - no2;
      break;
    case "mult":
      result = no1 * no2;
      break;
    case "div":
      no2 != 0 ? (result = no1 / no2) : (result = "error");
  }
  selectionNo = 0;
  resulttxt.innerText = result;
  operation = "none";
}

function doSpecialFunction(textSelected) {
  switch (textSelected) {
    case "AC":
      resulttxt.innerHTML = "";
      break;
    case "=":
      Operate(no1, no2, operation);
      break;
    case "Ans":
      no1 = result;
      selectionNo = 1;
      break;
    case "+":
      operation = "add";
      break;
    case "-":
      operation = "sub";
      break;
    case "×":
      operation = "mult";
      break;
    case "÷":
      operation = "div";
      break;
    default:
      return;
  }
}

function addValue(noSelected) {
  selectionNo == 0 ? (no1 = noSelected) : (no2 = noSelected);
  console.log(selectionNo + ":" + no1 + "   " + operation + " " + no2);
  selectionNo++;

  //If it is first number then add value to no1
  //If it is second number then add value to no2
  //If it is operator then add operation
}

buttons.addEventListener("click", (e) => {
  clickedElement = e.target;
  textSelected = e.target.innerText;
  if (clickedElement.nodeName == "BUTTON") {
    resulttxt.innerText = textSelected;
    if (isNaN(Number(textSelected))) {
      doSpecialFunction(textSelected);
    } else {
      noSelected = Number(textSelected);
      addValue(noSelected);
    }
  }
});

const resulttxt = document.querySelector(".result");
const buttons = document.querySelector(".calcbtns");

let result = 0;
let no1 = 0;
let no2 = 0;
let operation = "none";

buttons.addEventListener("click", (e) => {
  clickedElement = e.target;
  if (clickedElement.nodeName == "BUTTON") {
    resulttxt.innerText = clickedElement.innerText;
    let result = "";
    switch (clickedElement.innerText) {
      case "AC":
        result = "";
        break;
      case "=":
        result = Operate(no1, no2, operation);
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
  resulttxt.innerText = result;
});

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

  return result;
}

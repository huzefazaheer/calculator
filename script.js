const root = document.querySelector(":root");
const resulttxt = document.querySelector(".result");
const buttons = document.querySelector(".calcbtns");
const changecolorbtn = document.querySelector(".changecolor");
let rootStyle = getComputedStyle(document.querySelector(":root"));

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
  no1 = result;
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
      resulttxt.innerHTML = result;
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

let currentTheme = "black";
changecolorbtn.addEventListener("click", (e) => {
  if (currentTheme == "black") {
    root.style.setProperty("--background-color", "#C9D4DB");
    root.style.setProperty("--button-color", "#4B6672");
    root.style.setProperty("--special-button-color", "#E9E11E");
    root.style.setProperty("--button-shadow-color", "#2f383c");
    root.style.setProperty(
      "--special-button-shadow-color",
      "rgb(174, 168, 21)"
    );
    currentTheme = "white";
  } else {
    root.style.setProperty("--background-color", "#1a1a1a");
    root.style.setProperty("--button-color", "#8f8c8c");
    root.style.setProperty("--special-button-color", "#4ac556");
    root.style.setProperty("--button-shadow-color", "#6a6a6a");
    root.style.setProperty("--special-button-shadow-color", "rgb(52, 136, 60)");
    currentTheme = "black";
  }
});

const root = document.querySelector(":root");
const resulttxt = document.querySelector(".result");
const buttons = document.querySelector(".calcbtns");
const changecolorbtn = document.querySelector(".changecolor");
const debugtxt = document.querySelector(".debug");
let rootStyle = getComputedStyle(document.querySelector(":root"));

let result = 0;
let no1 = 0;
let no2 = 0;
let operation = "none";

function Operate() {
  no1 = Number(no1);
  no2 = Number(no2);
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
      break;
  }
  resulttxt.innerText = result;
  no1 = result;
  no2 = 0;
  operation = "none";
}

function doSpecialFunction(textSelected) {
  switch (textSelected) {
    case "AC":
      resulttxt.innerHTML = "";
      no1 = 0;
      no2 = 0;
      result = 0;
      operation = "none";
      break;
    case "DEL":
      operation == "none"
        ? (no1 = Number(no1.toString().slice(0, no1.toString().length - 1)))
        : (no2 = Number(no2.toString().slice(0, no2.toString().length - 1)));
      operation == "none"
        ? (resulttxt.innerHTML = no1.toString())
        : (resulttxt.innerHTML = no2.toString());
      break;
    case "=":
      Operate();
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
  // selectionNo == 0 ? (no1 = noSelected) : (no2 = noSelected);
  // console.log(selectionNo + ":" + no1 + "   " + operation + " " + no2);
  // selectionNo++;

  //If it is first number then add value to no1
  //If it is second number then add value to no2
  //If it is operator then add operation

  if (operation == "none") {
    if ((noSelected == "." && no1.toString().includes(".")) == false) {
      no1 == 0 ? (no1 = noSelected) : (no1 = no1.toString() + noSelected);
      resulttxt.innerHTML = no1.toString();
    }
  } else {
    if ((noSelected == "." && no2.toString().includes(".")) == false) {
      no2 == 0 ? (no2 = noSelected) : (no2 = no2.toString() + noSelected);
      resulttxt.innerHTML = no2.toString();
    }
  }
  console.log(`no1 ${no1} ${operation} no2 ${no2}`);
}

buttons.addEventListener("click", (e) => {
  clickedElement = e.target;
  textSelected = e.target.innerText;
  if (clickedElement.nodeName == "BUTTON") {
    if (isNaN(Number(textSelected)) && textSelected != ".") {
      doSpecialFunction(textSelected);
    } else {
      addValue(textSelected);
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

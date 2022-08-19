//business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number3, number4) {
  return number3 - number4;
}

function multiply(number5, number6) {
  return number5 * number6; 
  }

function divide(number7, number8) {
  return number7 / number8;
}

//user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const number3 = parseInt(prompt("Enter a number:"));
const number4 = parseInt(prompt("Enter another number"))
const number5 = parseInt(prompt("Enter a number:"));
const number6 = parseInt(prompt("Enter another number"))
const number7 = parseInt(prompt("Enter a number:"));
const number8 = parseInt(prompt("Enter another number"))

window.alert(number1 + "+" + number2 + "=" + add(number1, number2));
window.alert(number2 + "-" + number3 + "=" + subtract(number3, number4));
window.alert(number5 + "*" + number6 + "=" + multiply(number5, number6));
window.alert(number7 + "/" + number8 + "=" + divide(number7, number8));







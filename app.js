const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const resultForm = document.getElementById("result");
//
const btnAddition = document.getElementById("addition");
const btnSubtraction = document.getElementById("subtraction");
const btnMultiplication = document.getElementById("multiplication");
const btnDivision = document.getElementById("division");

let result = "";
let firstResult = parseInt(firstNumber.value);
let secondResult = parseInt(secondNumber.value);

function onAddition() {
  if (typeof firstResult == "number" && typeof secondResult == "number") {
    result = firstResult + secondResult;
    console.log(result);
    resultForm.value = result;
  } else {
    alert("Type of input is not an number");
  }
}

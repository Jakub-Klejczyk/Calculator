const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const resultForm = document.getElementById("result");
//
const btnAddition = document.getElementById("addition");
const btnSubtraction = document.getElementById("subtraction");
const btnMultiplication = document.getElementById("multiplication");
const btnDivision = document.getElementById("division");

let result = "";

function onAddition() {
  if (isNaN(firstNumber) && isNaN(secondNumber)) {
    result = firstNumber.innerHTML + secondNumber.innerHTML;
    console.log(result);
    resultForm.innerHTML = result;
  } else {
    alert("Type of input is not an number");
  }
}

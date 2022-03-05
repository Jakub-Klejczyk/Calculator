const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const resultForm = document.getElementById("result");
//

let result = "";
let firstResult = "";
let secondResult = "";

function parsing() {
  firstResult = parseInt(firstNumber.value);
  secondResult = parseInt(secondNumber.value);
}

function onAddition() {
  parsing();
  if (isNaN(firstResult) || isNaN(secondResult)) {
    alert("Type of input is not an number");
    return;
  }
  result = firstResult + secondResult;
  resultForm.value = result;
}

function onSubtraction() {
  parsing();
  if (isNaN(firstResult) || isNaN(secondResult)) {
    alert("Type of input is not an number");
    return;
  }
  result = firstResult - secondResult;
  resultForm.value = result;
}

function onMultiplication() {
  parsing();
  if (isNaN(firstResult) || isNaN(secondResult)) {
    alert("Type of input is not an number");
    return;
  }
  result = firstResult * secondResult;
  resultForm.value = result;
}

function onDivision() {
  parsing();
  if (isNaN(firstResult) || isNaN(secondResult)) {
    alert("Type of input is not an number");
    return;
  }
  result = firstResult / secondResult;
  resultForm.value = result;
}

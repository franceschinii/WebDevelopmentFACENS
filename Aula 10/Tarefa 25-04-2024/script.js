document.addEventListener("DOMContentLoaded", function () {
  init();
});

function init() {
  count();
  tabuada();
  selectOperation("add"); // Setting 'add' as the default operation
  calculate();
  listNumbers();
}

function count() {
  let counter = 0;
  let max = 100;
  setInterval(() => {
    if (counter <= max) {
      document.getElementById("contador").innerText = "O número é: " + counter;
      counter++;
    }
  }, 100);
}

function tabuada() {
  let num = document.getElementById("tabuada-form").value;
  let result = "";
  for (let i = 0; i <= 10; i++) {
    result += `${num} x ${i} = ${num * i}<br>`;
  }
  document.getElementById("tabuada").innerHTML = result;
}

let currentOperation = "add";

function selectOperation(op) {
  currentOperation = op;
}

function calculate() {
  let num1 =
    parseFloat(document.getElementById("calculator-input-n1").value) || 0;
  let num2 =
    parseFloat(document.getElementById("calculator-input-n2").value) || 0;
  let result;
  switch (currentOperation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
  }
  document.getElementById(
    "calculationResult"
  ).innerHTML = `${num1} ${operationSymbol(
    currentOperation
  )} ${num2} = ${result}`;
}

function operationSymbol(op) {
  switch (op) {
    case "add":
      return "+";
    case "subtract":
      return "-";
    case "multiply":
      return "*";
    case "divide":
      return "/";
  }
}

function listNumbers() {
  let all = [];
  let even = [];
  for (let i = 0; i <= 10; i++) {
    all.push(i);
    if (i % 2 === 0) {
      even.push(i);
    }
  }
  document.getElementById("listAll").innerHTML = all.join(", ");
  document.getElementById("listEven").innerHTML = even.join(", ");
}

function calculateFinalPrice() {
  let cost = parseFloat(document.getElementById("factoryCost").value) || 0;
  let markup =
    parseFloat(document.getElementById("distributorMarkup").value) || 0;
  let taxes = parseFloat(document.getElementById("taxes").value) || 0;
  let finalPrice = cost + (cost * markup) / 100 + (cost * taxes) / 100;
  document.getElementById("finalValue").innerHTML = finalPrice.toFixed(2);
}

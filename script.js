let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
  calculatorScreen.value = number;
};
const numbers = document.querySelectorAll(".button");
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};
numbers.forEach((button) => {
  button.addEventListener("click", (event) => {
      inputNumber(event.target.value)
      updateScreen(currentNumber);
  });
});
const operators = document.querySelectorAll(".operator")
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    // prevNumber = currentNumber;
    // calculationOperator = operator;
    // currentNumber = '';
    currentNumber = '0'
}
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})
const equalSign = document.querySelector('.equal-sign');
const calculate = () => {
    console.log(prevNumber);
    let result = '';
    switch (calculationOperator) {
      case "+":
        result = parseFloat(prevNumber) + parseFloat(currentNumber);
        break;
      case "-":
        result = parseFloat(prevNumber) - parseFloat(currentNumber);
        break;
      case "*":
        result = parseFloat(prevNumber) * parseFloat(currentNumber);
        break;
      case "/":
        result = parseFloat(prevNumber) / parseFloat(currentNumber);
        break;
      case "%":
        result = parseFloat(prevNumber) / parseFloat(currentNumber);
        break;
      default:
        return
    }
    currentNumber = result;
    calculationOperator = '';
}
equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber)
})
const percentase = document.querySelector(".percentage");
const calculatepercentase = () => {
    let result = parseFloat(currentNumber) / 100;
  currentNumber = result;
};
percentase.addEventListener("click", () => {
  calculatepercentase();
  updateScreen(currentNumber);
});
const clearBtn = document.querySelector(".all-clear");
const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0'
}
clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})
const decimal = document.querySelector('.decimal');
const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot;
}
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})
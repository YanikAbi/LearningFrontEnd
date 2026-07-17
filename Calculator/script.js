const screen = document.querySelector(".calculator-screen");
const keys = document.querySelector(".calculator-buttons");

const calculator = {
  displayValue: 0,
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  screen.textContent = calculator.displayValue;
}

updateDisplay();

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === 0 ? digit : displayValue + digit;
  }

  console.log(calculator);
}

keys.addEventListener("click", (event) => {
  const target = event.target;

  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("all-clear")) {
    console.log("clear", target.value);
    return;
  }

  if (target.classList.contains("equal-sign-btn")) {
    console.log("equal", target.value);
    return;
  }

  if (target.classList.contains("decimal")) {
    console.log("decimal", target.value);
    return;
  }

  if (
    target.classList.contains("operator") ||
    target.classList.contains("percent-btn")
  ) {
    console.log("operator", target.value);
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});

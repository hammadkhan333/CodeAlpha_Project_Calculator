let displayValue = '';
let currentOperation = null;
let firstOperand = '';
let secondOperand = '';
let shouldResetDisplay = false;

const display = document.getElementById('display');

function updateDisplay() {
    display.innerText = displayValue;
}

function appendNumber(number) {
    if (shouldResetDisplay) {
        displayValue = '';
        shouldResetDisplay = false;
    }
    displayValue += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation !== null) calculateResult();
    firstOperand = displayValue;
    currentOperation = operation;
    shouldResetDisplay = true;
    displayValue += operation;
    updateDisplay();
}

function calculateResult() {
    if (currentOperation === null || shouldResetDisplay) return;
    secondOperand = displayValue.split(currentOperation)[1];
    displayValue = String(eval(`${firstOperand}${currentOperation}${secondOperand}`));
    currentOperation = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function allClear() {
    displayValue = '';
    currentOperation = null;
    firstOperand = '';
    secondOperand = '';
    shouldResetDisplay = false;
    updateDisplay();
}


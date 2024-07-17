let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
    currentNumber += number;
    display.innerText = currentNumber;
}

function setOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculateResult();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentNumber = result;
    operation = undefined;
    previousNumber = '';
    display.innerText = result;
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    display.innerText = '';
}

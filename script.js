let currentResult = '0';
let calculationOperator = '';
let previousResult = '0';

function clearResult() {
    currentResult = '0';
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('result');
    display.value = currentResult;
}

function backspace() {
    if (currentResult.length > 1) {
        currentResult = currentResult.slice(0, -1);
    } else {
        currentResult = '0';
    }
    updateDisplay();
}

function appendNumber(number) {
    if (currentResult === '0') {
        currentResult = number;
    } else {
        currentResult += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (calculationOperator !== '') {
        calculate();
    }
    calculationOperator = operator;
    previousResult = currentResult;
    currentResult = '0';
    updateDisplay();
}

function appendDecimal() {
    if (!currentResult.includes('.')) {
        currentResult += '.';
    }
    updateDisplay();
}

function calculate() {
    const previous = parseFloat(previousResult);
    const current = parseFloat(currentResult);
    if (isNaN(previous) || isNaN(current)) {
        return;
    }
    let result;
    switch (calculationOperator) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            result = previous / current;
            break;
        default:
            return;
    }
    currentResult = result.toString();
    calculationOperator = '';
    previousResult = '0';
    updateDisplay();
}

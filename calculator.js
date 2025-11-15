let currentInput = '0';
let previousInput = null;
let operator = null;
let shouldResetDisplay = false;
let lastResult = null;
let nextInput = false;

const displays = document.getElementById('main-display');
const equationDisplay = document.getElementById('equation-display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const equalsButton = document.getElementById('equals');


function updateDisplays(value) {
    mainDisplay.value = value;
//    let equationString = '';
//    if (lastResult !== null) {
//        equationString = `${lastResult} ${operator}`;
//    } else if (num1 !== '' && operator) {
//        equationString = `${num1} ${operator}`;
//    } else if (num1 !== '') {
//        equationString = num1;
//    }
//    equationDisplay.textContent = equationString;
}

function updateEquationDisplay(text) {
    equationDisplay.textContent = text;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.dataset.number;
        if (number === '.') {
            if (currentInput.includes('.')) {
                return;
            }
        }
        if (nextInput) {
            currentInput = number;
            nextInput = false;
            updateEquationDisplay('');
        } else {
            if (currentInput === '0' && number !== '.') {
//            } || (typeof currentInput === 'string' && currentInput.includes('Error'))) {
                currentInput = number;
            } else {
                currentInput += number;
            }
        }
        updateDisplays(currentInput);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator !== null && currentInput !== '') {
            operator = button.dataset.operator;
            updateDisplays(currentInput);
            updateEquationDisplay(`${previousInput} ${operator}`);
            return;
        }
        if (currentInput !== '' && previousInput === null) {
            previousInput = currentInput;
            operator = button.dataset.operator;
            nextInput = true;
            updateDisplays(currentInput);
            updateEquationDisplay(`${previousInput} ${operator}`);
        }
//        if (num2 === '') return;
//        if (num1 !== '') {
//            num2 = operate(operator, parseFloat(num1), parseFloat(num2)).toString();
//            updateDisplays(num2);
//            updateEquationDisplay(`${num1} ${operator}`);
//        }
//
//        operator = button.dataset.operator;
//        num1 = num2;
//        shouldResetDisplay = true;
    });
});

equalsButton.addEventListener('click', () => {
    if (previousInput === null || operator === null || nextInput) {
        return roundNumber(result, 2);
    }
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    const result = operate(operator, num1, num2);
    updateDisplays(result);
    updateEquationDisplay('');
    currentInput = result.toString();
    previousInput = null;
    operator = null;
    nextInput = true;
//    const result = operate(operator, parseFloat(num1), parseFloat(num2));
//    updateDisplays(result);
//    updateEquationDisplay('');
//    equationDisplay.textContent = '';
//    num2 = result.toString();
//    num1 = '';
//    operator = null;
//    shouldResetDisplay = true;
});

clearButton.addEventListener('click', () => {
    currentInput = '0';
    previousInput = null;
    operator = null
    nextInput = false;
    updateDisplays(currentInput);
    updateEquationDisplay(currentInput);
});

deleteButton.addEventListener('click', () => {
    if (currentInput.length === 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplays(currentInput);
});

function roundNumber(num, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error Loser";
            }
            return num1 / num2;
        default: return num2;
    }
}


let currentInput = '0';
let previousInput = null;
let operator = null;
let lastResult = null;
let nextInput = false;

const displays = document.getElementById('main-display');
const equationDisplay = document.getElementById('equation-display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const equalsButton = document.getElementById('equals');


document.addEventListener('keydown', (event) => {
    handlekeyPress(event.key);
});

function handlekeyPress(key) {
    if (/[0-9.]/.test(key)) {
        simulateNumberClick(key);
        return;
    }

    if (/[\+\-\*\/]/.test(key)) {
        simulateOperatorClick(key);
        return;
    }

    if (key === '=' || key === 'Enter') {
        event.preventDefault();
        equalsButton.click();
        return;
    }

    if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearButton.click();
        return;
    }

    if (key === 'Backspace') {
        deleteButton.click();
        return;
    }
}

function getButtonElement(key) {
    if (/[0-9.]/.test(key)) {
        return document.querySelector(`.number[data-number="${key}"]`);
    }

    if (/[\+\-\*\/]/.test(key)) {
        return document.querySelector(`.operator[data-operator="${key}"]`);
    }

    if (key === '=' || key === 'Enter') {
        return document.getElementById('eqals');
    }

    if (key === 'Escape' || key.toLowerCase() === 'c') {
        return document.getElementById('clear');
    }

    if (key === 'Backspace') {
        return document.getElementById('delete');
    }
    return null;
}

document.addEventListener('keydown', (event) => {
    const button = getButtonElement(event.key);
    if (button) {
        button.classList.add('active-keyboard');
        handlekeyPress(event.key);
    }
});

document.addEventListener('keyup', (event) => {
    const button = getButtonElement(event.key);
    if (button) {
        button.classList.remove('active-keyboard');
    }
});

function updateDisplays(value) {
    document.getElementById('mainDisplay').value = value;
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

function simulateNumberClick(key) {
    const button = document.querySelector(`.number[data-number="${key}"]`);
    if (button) {
        button.click();
    }
}

function simulateOperatorClick(key) {
    const button = document.querySelector(`.operator[data-operator="${key}"]`);
    if (button) {
        button.click();
    }
}
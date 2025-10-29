let currentInput = '';
let previousInput = '';
let operator = '';

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.buttons .number');
const operatorButtons = document.querySelectorAll('.buttons .operator');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const equalsButton = document.getElementById('equals');

function appendNumber(number) {
    if (currentInput === '0' || currentInput === '') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    display.value = value;
}

function setOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        performCalculation();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function performCalculation() {
    if (previousInput === '' || currentInput === '') return;

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result = operate(operator, num1, num2, ...numbers);
    updateDisplay(result);

    switch (operator) {
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
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    displayElement.value = currentInput;
}

const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
};

function add(...numbers) {
    return numbers.reduce((total, currentNumber) => total + currentNumber, 0);
};

console.log(add(1, 2, 3, 4, 5));

function subtract(...numbers) {
    return numbers.reduce((total, currentNumber) => total - currentNumber);
};

console.log(subtract(10, 3, 2, 1));

function multiply(...numbers) {
    return numbers.reduce((total, currentNumber) => total * currentNumber);
};

console.log(multiply(5, 2, 2, 3));

function divide(...numbers) {
    return numbers.reduce((total, currentNumber) => total / currentNumber);
};

console.log(divide(50, 2, 2, 3));

function operate(operator, num1, num2, ...numbers) {
    const operationFunction = operations[operator];

    if (operationFunction) {
        return operationFunction(num1, num2, ...numbers);
    } else {
        return "Error: Invalid operator.";
    }
}

console.log(operate('+', 5, 3, 5, 7));
console.log(operate('*', 5, 3));
console.log(operate('%', 5, 3));




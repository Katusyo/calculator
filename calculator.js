let currentInput = '';
let previousInput = '';
let operator = '';

const displayElement = document.getElementById('display');

function appendNumber(number) {
    currentInput += number;
    displayElement.value = currentInput;
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
    let result;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    displayElement.value = currentInput;
}

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

function operate() {
    
}

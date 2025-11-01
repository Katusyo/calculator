let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetDisplay = false;
let lastResult = null;

const display = document.getElementById('main-display');
const equationDisply = document.getElementById('equation-display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const equalsButton = document.getElementById('equals');


function updateDisplays() {
    mainDisplay.value = currentInput;
    let equationString = '';
    if (lastResult !== null) {
        equationString = `${lastResult} ${operator}`;
    } else if (previousInput !== '' && operator) {
        equationString = `${previousInput} ${operator}`;
    } else if (previousInput !== '') {
        equationString = previousInput;
    }
    equationDisply.textContent = equationString;
}

//function operate(op) {
//    if (currentInput === '') return;
//    if (previousInput !== '') {
//        performCalculation();
//    }
//    operator = op;
//    previousInput = currentInput;
//    currentInput = '';
//}

function performCalculation() {
    if (previousInput === '' || currentInput === '') return;

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result = operate(operator, parseFloat(previousInput), parseFloat(currentInput));
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
}

const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
};

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.dataset.number;
        if (shouldResetDisplay) {
            currentInput = number;
            shouldResetDisplay = false;
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
        if (currentInput === '') return;
        if (previousInput !== '') {
            currentInput = operate(operator, parseFloat(previousInput), parseFloat(currentInput)).toString();
            updateDisplays(currentInput);
        }

        operator = button.dataset.operator;
        previousInput = currentInput;
        shouldResetDisplay = true;
    });
});
//        const nextOperator = button.dataset.operator;
//        if (operator && previousInput !== '') {
//            const result = operate(operator, num1, num2, ...numbers);
//            lastResult = result;
//            updateDisplays(result);
//            previousInput =result;
//        } else {
//            previousInput = currentInput;
//        }
//        operator = nextOperator;
//        shouldResetDisplay = true;
//    });
//});

//        if (previousInput !== '' && operator !== null) {
//            currentInput = operate(operator, parseFloat(previousInput), parseFloat(currentInput));
//            updateDisplay(currentInput);
//            previousInput = currentInput;
//        } else {
//            previousInput = currentInput;
//        }
//        operator = button.dataset.operator;
//        shouldResetDisplay = true;
//    });
//});

equalsButton.addEventListener('click', () => {
    if (previousInput === '' || operator === null || shouldResetDisplay) {
        return;
    }
    const result = operate(operator, parseFloat(previousInput), parseFloat(currentInput));
    updateDisplays(result);
    currentInput = result.toString();
    previousInput = '';
    operator = null;
    shouldResetDisplay = true;
});

//    if (operator && previousInput !== '') {
//        const result = operate(operator, parseFloat(previousInput), parseFloat(currentInput));
//        updateDisplays(result);
//        currentInput = result.toString();
//        previousInput = '';
//        operator = null;
//        shouldResetDisplay = true;
//        lastResult = null;
//    }
//});

//    if (previousInput === '' || operator === null) return;
//    const result = operate(operator, parseFloat(previousInput), parseFloat(currentInput));
//    updateDisplays(result);
//    currentInput = result.toString();
//    previousInput = '';
//    operator = null;
//    shouldResetDisplay = true;
//});

clearButton.addEventListener('click', () => {
    currentInput = '0';
    previousInput = '';
    operator = null
    shouldResetDisplay = false;
    updateDisplays(currentInput);
});

deleteButton.addEventListener('click', () => {
    if (currentInput.length === 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplays(currentInput);
});

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

function operate(operator, previousInput, currentInput) {
    switch (operator) {
        case '+': return previousInput + currentInput;
        case '-': return previousInput - currentInput;
        case '*': return previousInput * currentInput;
        case '/':
            if (currentInput === 0) return "Error";
            return previousInput / currentInput;
        default: return currentInput;
    }
}
//    const operationFunction = operations[operator];
//
//    if (operationFunction) {
//        return operationFunction(num1, num2, ...numbers);
//    } else {
//        return "Error: Invalid operator.";
//    }
//}

console.log(operate('+', 5, 3, 5, 7));
console.log(operate('*', 5, 3));
console.log(operate('%', 5, 3));




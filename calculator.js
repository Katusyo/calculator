let num1 = '0';
let num2 = '';
let operator = null;
let shouldResetDisplay = false;
let lastResult = null;

const display = document.getElementById('main-display');
const equationDisplay = document.getElementById('equation-display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const equalsButton = document.getElementById('equals');


function updateDisplays(value) {
    mainDisplay.value = value;
    let equationString = '';
    if (lastResult !== null) {
        equationString = `${lastResult} ${operator}`;
    } else if (num1 !== '' && operator) {
        equationString = `${num1} ${operator}`;
    } else if (num1 !== '') {
        equationString = num1;
    }
    equationDisplay.textContent = equationString;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.dataset.number;
        if (shouldResetDisplay) {
            num2 = number;
            shouldResetDisplay = false;
        } else {
            if (num2 === '0' && number !== '.') {
                num2 = number;
            } else {
                num2 += number;
            }
        }
        updateDisplays(num2);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (num2 === '') return;
        if (num1 !== '') {
            num2 = operate(operator, parseFloat(num1), parseFloat(num2)).toString();
            updateDisplays(num2);
        }

        operator = button.dataset.operator;
        num1 = num2;
        shouldResetDisplay = true;
    });
});

equalsButton.addEventListener('click', () => {
    console.log("Equals button clicked!");
    console.log("Previous Input:", num1);
    console.log("Current Input:", num2);
    console.log("Operator:", operator);
    console.log("Should Reset Display:", shouldResetDisplay);

    if (num1 === '' || operator === null || shouldResetDisplay) {
        console.log("Condition failed, returning early.");
        return;
    }

    console.log("Condition passed, performing calculation.");
    
    const result = operate(operator, parseFloat(num1), parseFloat(num2));
    updateDisplays(result);
    equationDisplay.textContent = '';
    num2 = result.toString();
    num1 = '';
    operator = null;
    shouldResetDisplay = true;
});

clearButton.addEventListener('click', () => {
    num2 = '0';
    num1 = '';
    operator = null
    shouldResetDisplay = false;
    updateDisplays(num2);
});

deleteButton.addEventListener('click', () => {
    if (num2.length === 1) {
        num2 = '0';
    } else {
        num2 = num2.slice(0, -1);
    }
    updateDisplays(num2);
});

function add(...numbers) {
    return numbers.reduce((total, num2) => total + num2, 0);
};

console.log(add(1, 2, 3, 4, 5));

function subtract(...numbers) {
    return numbers.reduce((total, num2) => total - num2);
};

console.log(subtract(10, 3, 2, 1));

function multiply(...numbers) {
    return numbers.reduce((total, num2) => total * num2);
};

console.log(multiply(5, 2, 2, 3));

function divide(...numbers) {
    return numbers.reduce((total, num2) => total / num2);
};

console.log(divide(50, 2, 2, 3));

function operate(operator, num1, num2) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error";
            }
            return num1 / num2;
        default: return num2;
    }
}


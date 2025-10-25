function add(...numbers) {
    return numbers.reduce((total, currentNumber) => total + currentNumber, 0);
//    console.log("input a:", parseFloat(a));
//    console.log("input b:", parseFloat(b));
//    let sum = parseFloat(a) + parseFloat(b);
//    console.log("Added sum:", sum);
//    return sum;
};

console.log(add(1, 2, 3, 4, 5));

//add(5, 3);

function subtract(...numbers) {
    return numbers.reduce((total, currentNumber) => total - currentNumber);
//    console.log("input a:", parseFloat(a));
//    console.log("input b:", parseFloat(b));
//	let sum = parseFloat(a) - parseFloat(b);
//    console.log("Subtracted sum", sum)
};

console.log(subtract(10, 3, 2, 1));

//subtract(5, 3);

function multiply(...numbers) {
    return numbers.reduce((total, currentNumber) => total * currentNumber);
//    console.log("input a:", parseFloat(a));
//    console.log("input b:", b);
//    let sum = a * b;
//    console.log("Multiplied sum", sum)
};

console.log(multiply(5, 2, 2, 3));

//multiply(5, 3);

function divide(a, b) {
    console.log("input a:", parseFloat(a));
    console.log("input b:", parseFloat(b));
    let sum = a / b;
    console.log("Divided sum", sum)
};

divide(5, 3);

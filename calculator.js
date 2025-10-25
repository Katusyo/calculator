function add(a, b) {
	console.log("input a:", parseFloat(a));
    console.log("input b:", parseFloat(b));
    let sum = parseFloat(a) + parseFloat(b);
    console.log("Added sum:", sum);
    return sum;
};

add(5, 3);

function subtract(a, b) {
    console.log("input a:", parseFloat(a));
    console.log("input b:", parseFloat(b));
	let sum = parseFloat(a) - parseFloat(b);
    console.log("Subtracted sum", sum)
};

subtract(5, 3);

function multiply(a, b) {
    console.log("input a:", parseFloat(a));
    console.log("input b:", b);
    let sum = a * b;
    console.log("Multiplied sum", sum)
};

multiply(5, 3);

function divide(a, b) {
    console.log("input a:", parseFloat(a));
    console.log("input b:", parseFloat(b));
    let sum = a / b;
    console.log("Divided sum", sum)
};

divide(5, 3);

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

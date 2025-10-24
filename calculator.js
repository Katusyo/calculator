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

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  if (array.length === 0) {
    return 0;
  }
  const product = array.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  })
  return product;
};

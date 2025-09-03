const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((accumulator, value) => accumulator + value, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, value) => accumulator * value, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	if (a == 0) {
    return 1;
  }
  product = 1;
  for (let i = 1; i <= a; i++) {
    product = product * i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

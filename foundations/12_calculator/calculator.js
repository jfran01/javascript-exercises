const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, num) => acc + num, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, num) => acc * num, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let init = 1;
  for (let i = 1; i <= num; i++) {
    init *= i;
  }
  return init;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

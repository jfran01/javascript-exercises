const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  if (Number.isNaN(num1) || Number.isNaN(num2)) return "ERROR";
  const smallestNum = Math.min(num1, num2);
  const largestNum = Math.max(num1, num2);
  let sum = 0;
  for (let i = smallestNum; i <= largestNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

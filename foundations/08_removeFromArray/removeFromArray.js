const removeFromArray = function (array, remove) {
  let index = array.indexOf(remove);
  let removedArray = array.splice(index, 1);
  return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;

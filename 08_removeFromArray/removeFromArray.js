const removeFromArray = function(array, ...elementToRemove) {
  return array.filter((val) => !elementToRemove.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;

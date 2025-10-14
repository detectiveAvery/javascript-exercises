const repeatString = function (string, num) {
  let stringRepeat = [];
  if (num < 0) {
    return 'ERROR';
  }
  for (let i = num; i > 0; i--) {
    stringRepeat.push(string);
  }
  return stringRepeat.join("");
};

// Do not edit below this line
module.exports = repeatString;

console.log(repeatString('hey', 3));

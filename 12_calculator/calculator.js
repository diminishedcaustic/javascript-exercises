const add = function(numOne,numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne,numTwo) {
	return numOne - numTwo;
};

const sum = function(array) {
  return array.reduce((total,current) => total + current,0);
};

const multiply = function(array) {
  return array.reduce((total,current) => total * current,1);
};

const power = function(numOne, numTwo) {
	return numOne**numTwo;
};

const factorial = function(number) {
	if(number === 1 || number === 0) {
    return 1;
  }else{
    return number * factorial(number-1);
  }
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

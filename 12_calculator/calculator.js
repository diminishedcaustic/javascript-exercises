const add = function(numOne,numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne,numTwo) {
	return numOne - numTwo;
};

const sum = function(array) {
	let sum = 0;
  for(let i = 0; i<array.length; i++) {
    sum = sum + array[i];
  }

  return Number(sum);
};

const multiply = function(array) {
  let product = 1;
  for(let i = 0; i<array.length; i++) {
    product = product * array[i];
  }

  return product;
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

// Get these values from process.argv
const operator = 'whatevs';
const operand1 = 0;
const operand2 = 0;

// A placeholder for the result of the calculation, duh.
let result;

// A closed if/else chain for each of the supported operations.
if (operator === 'add') {

  result = operand1 + operand2;

} else if (operator === 'subtract') {

  result = operand1 - operand2;

} else if (operator === 'multiply') {

  result = operand1 * operand2;

} else if (operator === 'divide') {

  result = operand1 / operand2;

} else {

  console.log('Invalid operator. SELF DESTRUCT!!!');

}

// The whole point!
console.log(`The result is : ${result}`);
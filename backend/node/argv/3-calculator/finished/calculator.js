
const operator = process.argv[2];
const operand1 = parseInt(process.argv[3]);
const operand2 = parseInt(process.argv[4]);

let result;

if (operator === 'add') {

  result = operand1 + operand2;

} else if (operator === 'subtract') {

  result = operand1 - operand2;

} else if (operator === 'multiply') {

  result = operand1 * operand2;

} else if (operator === 'divide') {

  result = operand1 / operand2;

} else {

  console.log('Invalid operator');

}

console.log(`The result is : ${result}`);
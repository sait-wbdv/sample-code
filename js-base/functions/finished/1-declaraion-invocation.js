// function declaration
function greet() {
  console.log('Hi!');
}
// function invoked
greet();

// function expression
const greetMe = function() {
	console.log('Hi Tony!');
}

// function invoked
greetMe();

// Advanced: immediately invoked anonymous function expression (IIFE)
(function() {
  console.log('Who dis?');
})()

console.log(greet);
console.log(greet());

// function expression
const greetMe = function() {
	console.log('Hi!');
}
// function invoked
greetMe();

// function expression with parameter (variable name)
const greetMe = function(name) {
	console.log(`Hi, ${name}!`);
}
// function invoked with argument (value)
greetMe('Tony');

// Advanced: passing an argument to an immediately invoked function expression (IIFE)
// This is a technique used by frameworks like jQuery
(function(name) {
  console.log(`Who ${name}?`);
})('Tony')

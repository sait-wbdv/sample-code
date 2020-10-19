## Function Sample Code
- [Declaration and invocation](https://github.com/sait-wbdv/sample-code/tree/master/js-base/functions/finished/1-declaration-invocation.js)
- [Parameters and arguments](https://github.com/sait-wbdv/sample-code/tree/master/js-base/functions/finished/2-parameter-argument.js)
- [First class functions](https://github.com/sait-wbdv/sample-code/tree/master/js-base/functions/finished/3-first-class.js)
- [Variable-scope](https://github.com/sait-wbdv/sample-code/tree/master/js-base/functions/finished/4-variable-scope.js)

## Function Examples
- [Simple `greet()` function](https://github.com/sait-wbdv/sample-code/tree/master/js-base/functions/examples/greet-1.js)
- [`greet()` function with callback](https://github.com/sait-wbdv/sample-code/tree/master/js-base/functions/examples/greet-2.js)

## Function Declarations vs Function Expressions
There are two common ways to create a function:

### Function Declaration
Also referred to as a function statement, this is a classic syntax common to many languages. Function declarations load the function into memory during the Creation Phase (iow, the function variable is "hoisted").

```js
function greet() {
  console.log('Hi!');
}
```

### Function Expression
Function expressions return the function as a value, which can later be assigned to a variable using the assignment operator `=`.

```js
const greetMe = function() {
	console.log('Hi Tony!');
}
```

## Anonymous callback functions
You will often see function expressions used to define anonymous callback functions:

```js
button.addEventListener('click',function(){
  // code here
});
```
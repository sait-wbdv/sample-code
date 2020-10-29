# Command Line Greeter
## Instructions
1. Copy this [starter code](greeter/starter/greet.js) into a new project folder.
2. Using `process.argv`, refactor the `greet` function to return the proper command line greeting based on the language preference provided via the command line. For example: typing `node greet.js es` into the terminal (assuming you're in the right directory) should return "Hola!":
    1. Navigate to the [starter code](greeter/starter/greet.js) directory from the command line.
    2. Use `process.argv` to import a `lang` argument from the command line.
    3. Based on the `lang` value, `console.log` the greeting in the correct language.

# `process.argv`

See: [How to parse command line arguments](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)

**Sample Code**: [Language abbreviation converter](argv-example.js)

## Activities 
### 1. Greetings from the command line
1. Copy this [starter code](greeter/starter/greet.js) into a new project folder.
2. Using `process.argv`, refactor the `greet` function to return the proper command line greeting based on the language preference provided via the command line. For example: typing `node greet.js es` into the terminal (assuming you're in the right directory) should return "Hola!":
    1. Navigate to the [starter code](greeter/starter/greet.js) directory from the command line.
    2. Use `process.argv` to import a `lang` argument from the command line.
    3. Based on the `lang` value, `console.log` the greeting in the correct language.

### 2. Tip Calculator
1. Copy this [starter code](tip-calculator/starter/tip-calc.js) into a new project folder.
2. Using `process.argv`, refactor the `tip-calc` script to return the proper tip amount based on the bill total provided. For example: typing `node tip-calc.js 20` into the terminal should return the tip amount based on the default tip rate:
    1. Navigate to the [starter code](tip-calculator/starter/tip-calc.js) directory from the command line. 
    2. Use `process.argv` to import `operator`, `operand1` and `operand2` arguments from the command line.
    3. Based on these arguments, `console.log` the (correct) final tip amount to the console.

### 3. Regular Calculator

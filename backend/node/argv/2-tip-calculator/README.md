# Activity: Command Line Tip Calculator
## Instructions
1. Copy this [starter code](starter/tip-calc.js) into a new project folder.
2. Using `process.argv`, refactor the `tip-calc` script to return the proper tip amount based on the bill total provided. For example: typing `node tip-calc.js 20` into the terminal should return the tip amount based on the default tip rate:
    1. Navigate to the [starter code](starter/tip-calc.js) directory from the command line. 
    2. Use `process.argv` to import `operator`, `operand1` and `operand2` arguments from the command line.
    3. Based on these arguments, `console.log` the (correct) final tip amount to the console.

## Spoilers

[Finished Code](finished/tip-calc.js)

## Extra Credit
This code works but it could be better:
- Add a check for the existence of the `billTotal` argument in case it's not passed to the script. In other words, if the user enters `node tip-calc.js` instead of `node tip-calc.js 30.48`, return a message of `Bill total not entered` or similar.
- Add the option for adding a second argument for a custom tip amount. If not, use the default.
- Add a check for the tip range to ensure that it's a value between 0-100. Bonus: make your app more robust by accepting values between 0-1 in case the user enters a ratio instead of a percentage value.

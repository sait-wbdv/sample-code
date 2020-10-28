// Get this value from process.argv
let billTotal = 0;

// Default tip rate as a percentage value
const tipRate = 18;

// Do the deed
const tipAmount = billTotal * (tipRate / 100);

// Output the result
console.log(`${tipRate}% of $${billTotal.toFixed(2)}: $${tipAmount.toFixed(2)}`);
// Starter loop
console.log('===');
console.log('Starter Loop');
console.log('===');

for (let i = 1; i <= 100; i++) {
  // If i is divisible by 3, log "Fizz"

  // If i is divisible by 5, log "Buzz"

  // If i is divisible by both 3 and 5, log "FizzBuzz"

  // Otherwise, print the number
  console.log(i);
}

console.log('===');
console.log('Solution 1');
console.log('===');

// Option 1: else if chain
for (let i = 1; i <= 100; i++) {
  if (i % 15  === 0) {
    // If i is divisible by both 3 and 5, log "FizzBuzz"
    console.log('FizzBuzz');
  } else if (i % 5  === 0) {
    // If i is divisible by 5, log "Buzz"
    console.log('Buzz');
  } else if (i % 3  === 0) {
    // If i is divisible by 3, log "Fizz"
    console.log('Fizz');
  } else {
    // Otherwise, print the number
    console.log(i);
  }
}

console.log('===');
console.log('Solution 2');
console.log('===');

// Option 2: ifs with string concatenation
let result;
for (let i = 1; i <= 100; i++) {
  result = '';

  if (i % 3  === 0) {
    result = "Fizz";
  }

  if (i % 5  === 0) {
    result = result + 'Buzz';
  }

  if (!result) {
    result = i;
  }

  console.log(result);
}
// Create a starter array
const animals = ['pug','puppy','husky','wolf'];

console.log(animals);

// Add an item to an array with `name[index] = x`
animals[animals.length] = 'bulldog';

console.log(animals);

// Remove a specific item from an array using splice
const wolf = animals.splice(3, 1);

console.log(animals);
console.log(wolf);

// Add an item to the end of an array using .push()

animals.push('bear')

console.log(animals);

// Add an item to the beginning of an array using .unshift()

animals.unshift('tiger');

console.log(animals);

// Remove an item from the beginning of an array using .shift()

const firstItem = animals.shift()

console.log(animals);
console.log(firstItem);

// Remove an item from the end of an array using .pop()

const lastItem = animals.pop();

console.log(animals);
console.log(lastItem);

const fs = require('fs');

let data;

try {
  // Synchronous file access is not recommended.
  data = fs.readFileSync('./assets/definitions.json', 'utf-8');
} catch (error) {
  data = 'Error';
}

console.log(data); 
console.log('Done');
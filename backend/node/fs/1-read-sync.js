const fs = require('fs');

let data;
try {
  data = fs.readFileSync('./assets/definitions.json', 'utf-8');
} catch (error) {
  data = 'Error';
}

console.log(data); 
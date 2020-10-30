const fs = require('fs');

fs.readFile('./assets/definitions.json', 'utf-8', function(error, data){
  if (error) {
    return console.log(error);
  }
  console.log(data);
});

console.log('Done.');
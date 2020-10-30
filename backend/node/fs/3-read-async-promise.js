const fs = require('fs');
const { promisify } = require('util');

const readFilePromise = promisify(fs.readFile);

readFilePromise('./assets/definitions.json', 'utf-8')
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });

console.log('Done.');
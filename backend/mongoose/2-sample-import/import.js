const mongoose = require('./_connection.js') 

// Import seed data
const dbSeed = require(`./seeds/animals.js`);

// Define model
const Animal = require(`./models/animal.js`);

Animal.insertMany(dbSeed, function(error, animal) {
  console.log('Data import completed.')
  mongoose.connection.close();
});
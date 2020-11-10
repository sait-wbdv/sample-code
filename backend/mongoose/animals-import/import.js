const modulePath = process.argv[2];

const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// Import seed data
const dbSeed = require(`./seeds/${modulePath}s.js`);

// Define model
const Animal = require(`./models/${modulePath}.js`);

/*******************************/
/* Mongoose/MongoDB Connection */
/*******************************/

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', function(error){
  console.log(`Connection Error: ${error.message}`)
});

db.once('open', function() {
  console.log('Connected to DB...');

});

Animal.insertMany(dbSeed, function(error, animal) {
  console.log('Data import completed.')
  mongoose.connection.close();
});
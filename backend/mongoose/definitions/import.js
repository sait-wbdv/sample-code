const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// Import seed data
const dbSeed = require(`./seeds/definitions.js`);

// Define model
const Definition = require(`./models/definition.js`);

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

Definition.insertMany(dbSeed, function(error, definition) {
  console.log('Data import completed.')
  mongoose.connection.close();
});
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const mongoDB = process.env.MONGODB_URL;

mongoose.connect(mongoDB, { useUnifiedTopology: true,useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log('Connected to DB...');
});

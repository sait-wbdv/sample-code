const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true,useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log('Connected to DB...');
});

// Create a Kitten schema
const kittySchema = new mongoose.Schema({
  name: String
});

// Compile a schema into a model
const Kitten = mongoose.model('Kitten', kittySchema);

// Create a Kitten document using our new model
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

// Add a method to the schema
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  if (this.name) {
    const greeting = `Meow name is ${this.name}.`;
  } else {
    const greeting = "I don't have a name.";
  }
  console.log(greeting);
}

const newKitten = mongoose.model('Kitten', kittySchema);

const fluffy = new newKitten({name: 'Fluffy'});
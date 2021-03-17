const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
var slugify = require('slugify');

// Define our Definition model.
// See `./models/definition.js` for details
const Definition = require('./models/definition.js');

const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up a pending connection to the database
// See: https://mongoosejs.com/docs/
const dbURI = process.env.MONGODB_URL;
mongoose.connect(dbURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// Connect to database. Mongoose handles the asynchonous aspects internally so we don't have to.
var db = mongoose.connection;

// Set a callback in case there's an error.
db.on('error', function(error){
  console.log(`Connection Error: ${error.message}`)
});
// Set a callback to let us know we're successfully connected
db.once('open', function() {
  console.log('Connected to DB...');
});

app.get('/api/v1/definitions', function(request, response){
  Definition.find(function(error, result) { 
    response.json(result);
  });
});

app.get('/definitions/:slug', function(request,response){
  Definition.findOne({slug: request.params.slug},function(error, result) { 
    if(error){
      return console.log(error);
    }
    response.render('definition',result);
  });
});

app.post('/definitions', function(request, response){
  request.body.slug = slugify(request.body.term);
  Definition.create(request.body, function(error, def){
    if(error){
      return console.log(error);
    }
    // TODO: create session and add success/error message
    console.log(def);
  })
  // TODO: update index view to display success.error message
  response.redirect('/');
});

app.get('/',function(request,response) {
  response.render('index',{});
})

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
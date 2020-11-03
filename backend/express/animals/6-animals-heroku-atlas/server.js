const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
// const animals = require('./animals');

const Gallery = require('./models/animal.js');

const mongoDB = process.env.MONGODB_URL;

mongoose.connect(mongoDB, { useUnifiedTopology: true,useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log('Connected to DB...');
});

const app = express();
app.set('view engine', 'ejs');

corsOptions = {
  origin: "https://dashboard.heroku.com",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
  response.render('animal-list',{});
})

app.get('/:id', function(request, response){

  Gallery.findOne({'id': request.params.id}, function(error, animal) {
  
    if (!animal) {
      return response.send('Invalid ID.');
    }

    response.render('animal-single',animal);
  });
})

app.get('/api/animals', function(request, response){

  // response.json(animals);

  Gallery.find(function(error, result) { 
    response.json(result);
  });

})



app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
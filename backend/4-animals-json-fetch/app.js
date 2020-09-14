const path = require('path');
const express = require('express');
const animals = require('./animals');

const app = express();
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
  response.render('animal-list',{});
})

app.get('/:id', function(request, response){

  // https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
  const animal = animals.find(function(item) {
    return item.id === parseInt(request.params.id);
  });

  if (!animal) {
    response.status(404);
    return response.send('Invalid ID.');
  }

  response.render('animal-single',animal);
})

app.get('/api/animals', function(request, response){
  response.json(animals);
})

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
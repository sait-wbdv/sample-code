const path = require('path');
const express = require('express');
const animals = require('./animals');

const app = express();
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/animals', function(request, response){
  response.render('animal-list',{});
})

// https://expressjs.com/en/api.html#req.params
app.get('/animals/:id', function(request, response){

  // https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
  const animal = animals.find(function(item) {

    return item.id === parseInt(request.params.id);

  });

  if (!animal) {
    return response.send('Invalid ID.');
  }

  response.render('animal-single',animal);
})

app.use(function(request, response, next) {
  response.status(404);
  response.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
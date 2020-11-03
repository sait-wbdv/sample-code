const path = require('path');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/animals', function(request, response){
  response.render('animal-list',{});
})

// There are better ways of doing this...
app.get('/animals/puppy', function(request, response){
  response.render('animal-single',{title: 'Puppy', id: 237});
})

app.get('/animals/bear', function(request, response){
  response.render('animal-single',{title: 'Bear', id: 433});
})

app.get('/animals/moose', function(request, response){
  response.render('animal-single',{title: 'Moose', id: 577});
})

app.get('/animals/coyote', function(request, response){
  response.render('animal-single',{title: 'Coyote', id: 582});
})

app.get('/animals/tiger', function(request, response){
  response.render('animal-single',{title: 'Tiger', id: 593});
})

app.get('/animals/husky', function(request, response){
  response.render('animal-single',{title: 'Husky', id: 659});
})

app.get('/animals/wolf', function(request, response){
  response.render('animal-single',{title: 'Wolf', id: 718});
})

app.get('/animals/monkey', function(request, response){
  response.render('animal-single',{title: 'Monkey', id: 783});
})

app.get('/animals/elk', function(request, response){
  response.render('animal-single',{title: 'Elk', id: 790});
})

app.get('/animals/bulldog', function(request, response){
  response.render('animal-single',{title: 'Bulldog', id: 837});
})

app.get('/animals/bird', function(request, response){
  response.render('animal-single',{title: 'Bird', id: 1024});
})

app.get('/animals/pug', function(request, response){
  response.render('animal-single',{title: 'Pug', id: 1025});
})

app.get('/animals/big-cat', function(request, response){
  response.render('animal-single',{title: 'Big Cat', id: 1074});
})

app.get('/animals/walrus', function(request, response){
  response.render('animal-single',{title: 'Walrus', id: 1084});
})

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
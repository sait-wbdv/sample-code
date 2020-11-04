const path = require('path');
const express = require('express');
const app = express();

app.get('/',function(request,response){
  response.send('Home page');
});

app.get('/contact',function(request,response){
  response.send('Contact page');
});

app.get('/team',function(request,response){
  response.send('Team page');
});

app.get('/products',function(request,response){
  response.send('Products page');
});

app.get('/gallery',function(request,response){
  response.send('Gallery page');
});

app.use(function(req, res) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

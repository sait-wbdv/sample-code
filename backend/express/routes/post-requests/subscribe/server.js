const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Parse all requests for url encoded form data.
app.use(express.urlencoded({ extended: true }));

// Do something with form data
app.post('/users',function(request,response){
  console.log(request.body);
  response.send(`<p>Thanks, ${request.body.name}! We'll send newsletter updates to ${request.body.email}.</p>`);
});

app.use(function(req, res) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

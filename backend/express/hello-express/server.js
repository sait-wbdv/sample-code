// Load dependencies
const path = require('path');
const express = require('express');

// Create express app
const app = express();

// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

// Add more middleware
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

// Set port preferrence with default
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
// Load the built-in `http` module
const http = require('http');

// Create and configure an `http` server
const server = http.createServer(function(request,response) {
  // Code in this block will execute every time a request is received.
  // console.log(request.headers);

  // Set the response HTTP header with HTTP status and Content
  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  
  // Send the response body "Hello World"
  response.end("<h1>Hello World!!</h1>");

  });

// Turn on the server. Nothing happens without this.
server.listen(8080, function() {
    console.log(`Listening on port 8080`);
});
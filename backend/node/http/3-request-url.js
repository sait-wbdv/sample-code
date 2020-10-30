const http = require('http');

const server = http.createServer(function(request,response) {

  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

  // Use the `request.url` property to gain access to the endpoint being requested. 
  response.end(`<h1>Request URL: ${request.url}</h1>`);
});

server.listen(8080, function() {
    console.log(`Listening on port 8080`);
});
const http = require('http');
// Load built-in `url` module
const url = require('url');

const server = http.createServer(function(request,response) {
  // Parse the URL that was requested
  const parsed = url.parse(request.url);

  response.writeHead(200, {"Content-Type": "text/plain"});

  response.end(`<h1>Request URL: ${request.url}</h1>`);
});

server.listen(8080, function() {
    console.log(`Listening on port 8080`);
});
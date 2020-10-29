const http = require('http');
// Load built-in `url` module
const url = require('url');

const server = http.createServer(function(request,response) {
  // Convert the request URL into an object. This converts the request url into its component parts.
  const parsed = url.parse(request.url);
  console.log(parsed);

  response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

  response.end(`<h1>Request URL: ${request.url}</h1>`);
});

server.listen(8080, function() {
    console.log(`Listening on port 8080`);
});
const http = require('http');
// Load built-in `url` module
const url = require('url');

const server = http.createServer(function(request,response) {
  // Convert the request URL into an object. This converts the request url into its component parts.
  const parsed = url.parse(request.url);
  console.log(parsed);
  
  // Set response headers
  let status = 200;

  // Declare response body
  let body;
  
  // Set 200 reponse if "page" is found, otherwise set 404 response and status code
  if (parsed.path === '/' || parsed.path === `/index.html`) {
    body = `<h1>Home page</h1>`;
  } else if (parsed.path === '/contact' || parsed.path === `/contact/index.html`) {
    body = `<h1>Contact page</h1>`;
  } else if (parsed.path === '/team' || parsed.path === `/team/index.html`) {
    body = `<h1>Team page</h1>`;
  } else if (parsed.path === '/products' || parsed.path === `/products/index.html`) {
    body = `<h1>Product page</h1>`;
  } else if (parsed.path === '/gallery' || parsed.path === `/gallery/index.html`) {
    body = `<h1>Gallery page</h1>`;
  } else {
    status = 404;
    body = `<h1>Page Not Found</h1>`;
  }

  // Send response and end session
  response.writeHead(status, {"Content-Type": "text/html; charset=utf-8"});
  response.end(body);
});

server.listen(8080, function() {
    console.log(`Listening on port 8080`);
});
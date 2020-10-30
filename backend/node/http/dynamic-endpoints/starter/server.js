const http = require('http');

const server = http.createServer(function(request,response) {
  // Set response headers
  let status = 200;

  // Declare response body
  let body;
  
  // Set 200 reponse if "page" is found, otherwise set 404 response and status code
  if (request.url === '/' || request.url === `/index.html`) {

    body = `<h1>Home page</h1>`;
  
  } else if (request.url === '/contact' || request.url === `/contact/index.html`) {
  
    body = `<h1>Contact page</h1>`;
  
  } else if (request.url === '/team' || request.url === `/team/index.html`) {
  
    body = `<h1>Team page</h1>`;
  
  } else if (request.url === '/products' || request.url === `/products/index.html`) {
  
    body = `<h1>Product page</h1>`;
  
  } else if (request.url === '/gallery' || request.url === `/gallery/index.html`) {
  
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
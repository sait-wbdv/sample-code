const http = require('http');

const server = http.createServer(function(request,response) {

  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

  // Split request.url by `/` to create an array of each "directory"
  const params = request.url.split('/');
  console.log(params);

  // Match endpoint: GET /picsum/:id
  // :id must be an integer
  // TODO: Add range test to match Picsum id range (for example, disallow an id of 1000000000 or -10)
  if(params[1] === 'picsum' && Number.isInteger(parseInt(params[2]))) {

    // Send Picsum image as a response, using the id parameter taken from the URL 
    response.end(`<img src="https://picsum.photos/id/${params[2]}/500/500" alt="Lorem Picsum Image">`);

  } else {

    response.end(`<h1>Request URL: ${request.url}</h1>`);

  }

});

server.listen(8080, function() {
    console.log(`Listening on port 8080`);
});
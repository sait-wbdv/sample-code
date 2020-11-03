# Hello express
## Prerequisites
1. There is a `package.json` file present in your project root directory.
2. `express` is installed as a dependency and is present in `node_modules`
3. You have a static website of your choice ready to put in the `public` directory mentioned below.

## Code Walkthrough
### Load dependencies
Once you have installed a dependency into your project (see Prerequisites above), you still have to load it into your app.

```js
const path = require('path');
const express = require('express');
```

`express` is a function that creates an express server when you invoke it below.

### Create an express server
The interface for every module is unique. Express wants you to start by invoking the function that `express` exports.

```js
const app = express();
```

`express()` returns an object. It has many methods that come in handy; today's favourite is `app.use()` which allows us to attach callback functions to every server request. We call this middleware

### Middleware: `express.static`
`express.static()` is a middleware handler (i.e. a callback function) that checks if the request URL matches a static file located anywhere in the directory you've passed it (our static website files).

```js
app.use(express.static(path.join(__dirname, 'public')));
```

**Important**: Don't forget to put your website files in `./public`. If one of your files is found, it's returned as a response back to the client. Magic!

### 404 File not found
If `express.static()` doesn't find a file, it passes the `request` and `response` objects to the `next` middleware function.

Here, we attach another middlware handler to send a `404` reponse back to the client.

```js
app.use(function(request, response) {
  response.status(404);
  response.send('404: File Not Found');
});
```

### Start server
`app.use()` won't run any of the code we've given it until a request comes in on the port we're listening to. But we're not listening to anything, yet. 

First, we need to set the port we want to listen to. This is fancy syntax for assigning a default variable (`8080`) if `process.env.PORT` isn't set (more on that in a later lesson).

```js
const PORT = process.env.PORT || 3000;
```

All that's left to do is start the server.

```js
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
```

The server will start inside the terminal window (making it pretty useless, besides logging to the console).
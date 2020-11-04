# Express Routes
Routes are the combination of an HTTP method and a URL endpoint. The endpoint refers to a resource, such as a file or JSON object, and the method tells us what we want to do with that resource.

## Express route methods
Also called route handlers, route methods have similar functionality to the `if` statement: if a request method matches a given method and url, it invokes the callback assigned to it.

This Express GET method:

```js
app.get('/',function(request,response){
  response.send('GET request: Read data');
});
```

Is functionally equivalent to this `if` statement:

```js
if (request.method === 'GET' && request.url === '/') {
  response.send('GET request: Read data')
}
```

See [Standard CRUD Methods](crud/server.js) to see examples of the methods we'll be covering in this course (mostly `GET` and `POST`).
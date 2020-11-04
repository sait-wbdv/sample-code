# Standard CRUD methods

**Sample Code**: [server.js](server.js)

## Activities: Postman Practice
1. Copy the code in this directory into a new project folder.
2. Launch the server and try to activate each endpoint handler using Postman.
    - Take note of the `Content-type`
3. Try changing the output inside `response.send()`. For example, try changing `GET request: Read data` to:
    - `<h1>GET request: Read Data</h1>`, or
    - `{method: 'GET', message: 'Read Data'}`

    How does this affect the response that Express sends? Hint: find the `Content-type` header in Postman or Firefox.
4. Add some static files using `express.static()` from yesterday.
    1. Copy a `public` directory from yesterday into your project folder.
    2. Add `express.static()` middleware _above_ the method handlers:
        
        ```js
        app.use(express.static(path.join(__dirname, 'public')));
        ```

    3. Create a new `app.get()` handler that matches a static file located in `public`, which one wins? 
    4. Try moving the middleware _after_ the method handlers. Is there any change in behaviour?
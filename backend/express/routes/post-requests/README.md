# Sample POST request server
**Sample Code**: [Subscribe Form](subscribe)

## Handling POST requests
`POST` requests map to the _Create_ action in CRUD and are a popular way to send form data to a server. When a `form` has a `method` attribute set to `post`, it will send a message body along with the request that contains the form data. 

By default, Express ignores this data so we have to add some middleware to our server before we can access it.

### `express.urlencoded()` middleware
The `express.urlencoded()` method takes URL encoded form data (the type of data submitted with a `form` element) contained in a `POST` request and copies it to the `request.body` object.

```js
app.use(express.urlencoded({ extended: true }));
```
- This line should be near the top of `server.js`; usually near your `express.static()` handler.
- The `extended` property can be either true or false for now (it doesn't have any effect unless we submit a form using Javascript) but it has to be defined.

### Accessing form data
Once the middlware has parsed the form data, it will be available in a new `request.body` object. In the above subscription example, the body object looks like this:

```js
{
  name: 'Tony',
  email: 'tony@example.com'
}
```

In the `POST /subscribers` handler, we can access the data using `request.body.name` and `request.body.email`:

```js
app.post('/subscribers',function(request,response){
  response.send(`<p>Thanks, ${request.body.name}! We'll send newsletter updates to ${request.body.email}.</p>`);
});
```

We will actually _do_ something with this data when we cover Mongoose.

### Historical Note: `body-parser`
There are a lot of tutorials that use the `body-parser` module. This is no longer relevant as of Expresss 4.16.

See: [Deprecation of the body-parser module in Express <= 4.15 (and un-deprecation as of >=4.16)](https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4)

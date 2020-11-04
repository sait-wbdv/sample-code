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

## Activity
### Register form POST request 
1. Find your Register and Login assignment from CPNT 260.
2. Using the [subscribe example](post-requests/subscribe) as a starting point, create a new Express project and replace the contents of `public` with your assignment files.
3. To the Register `form`:
    1. Add an `action` attribute of `/users`;
    2. Add a `method` attribute of `post`.
4. In `server.js`:
    1. Add `express.urlencoded()` middleware near the top of the file;
    2. Create a `app.post` handler for `/users`.
    3. Inside this handler, send a personalized response back to the user (but maybe don't send the password).
5. Submit the form to see the customized response.
6. Try adding more form controls such as radio buttons, chekboxes, select menus, etc.
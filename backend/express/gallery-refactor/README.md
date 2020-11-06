# Refactor Animal Gallery
Refactor this [starter code](starter) to `fetch()` the image list instead of using a local variable:
1. Copy the [starter code](starter) into a new project and `npm install`.
2. In `server.js`, create a new `app.get()` handler for the following endpoint:

    ```
    GET /api/animals
    ```

    Like so:

    ```js
    app.get('api/animals', function(request, response){
      // Step 3 goes here.
    });
    ```
3. Inside this new endpoint handler:
    1. Move the `imgList` array variable from `client.js` into the endpoint handler you just created in `server.js`.
    2. Using `response.json` return the array as a JSON response to the browser.
4. In `client.js`, create a `fetch()` request for your new JSON endpoint:

    ```js
    fetch('locahost:3000/api/animals')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Loop through the array

      }).catch((error) => {
        console.error('Error:', error);
      });
    ```
5. Move your `imgList.forEach()` loop and `gallery.innerHTML = outputHTML` code into the second `.then()` callback.
6. Boot up your server see if it worked! 
7. Troubleshoot problems:
    - Is the problem on the server-side or client-side. Hint: Use Postman to test your endpoint first. If that's working, then try fixing your `client.js` code.
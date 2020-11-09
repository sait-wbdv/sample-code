# Building HTML: Frontend vs Backend 
When it comes to building HTML from Javascript data, there are two competing paradigms in the web development industry:
1. **Server-side rendering**: Render a view (with EJS, for example) on the backend and send finished HTML to the client, OR;
2. **Client-side rendering**: Send the data to browser in JSON format and manipulate the DOM on the frontend.

## Scenario
Let's say we have a database of Lorem Picsum IDs outputting to an array such as this:

```js
[237, 433, 577, 582, 593, 659, 718, 783, 790, 837, 1024, 1025, 1074, 1084];
```

And we want to generate a gallery of Lorem Picsum images in a web page. There are two methods of doing this.

## 1. Server-side rendering: Render a view (i.e. using EJS) on the backend
1. The client sends a request for the following HTML endpoint:

    ```
    GET /gallery
    ```
2. The server receives the request with an `app.get()` endpoint handler;
3. The server retrieves the array, either from:
    - a custom node module that returns the array, or;
    - a database (i.e. using Mongoose) that returns the array.
4. The server injects the array into a `gallery.ejs` view:

    ```js
    response.render('gallery.ejs',{images: someArray});
    ```
    
    and renders an HTML file by looping through the array using `<% %>` EJS tags:

    ```html
    <div class="gallery">
    <% images.forEach(function(image) { %>
      <img src="https://picsum.photos/id/<%= image %>}/500">
    <% }); %>
    </div>
    ```

5. The server responds to the client request with a finished HTML gallery, including the `head`, `body`, `nav`, `header`, etc.

#### Pros: 
- It takes fewer network requests to build the page (no second JSON request).
- It's generally a better user experience since the page loads with the data right away (i.e. there's no spinning icon while the JSON request is pending).
- All browsers support this method since all it sees is HTML.

#### Cons
- This method makes building native iOS and Android apps more difficult.
- Server load can be an issue with high web traffic.
- Single-page applications (SPAs) are impossible using this method.

## 2. Client-side rendering: Manipulate the DOM with JSON data on the frontend
1. The client sends a request for the following HTML endpoint:

    ```
    GET /gallery
    ```
2. The server receives the request with an `app.get()` endpoint handler;
3. _Instead_ of looping through the array with EJS, the server renders an HTML page with an _empty_ gallery:

    ```html
    <div class="gallery">
      <!-- Gallery goes here later -->
    </div>
    ```

4. The server responds to the client request with an empty HTML gallery, but also includes a `script` link to a `client.js` file that tells the browser to make a separate request for the data using `fetch()`.
5. The browser loads `client.js` and sends a request for the following endpoint using `fetch()`:

    ```
    GET /api/gallery
    ```

    The `/api` portion of the endpoint usually means this will be a JSON response (this is a convention, not a requirement of Express).
6. The server _then_ (on the `fetch()` request, not the HTML request) retrieves the array, either from:
    - a custom node module that returns the array, or;
    - a database (i.e. using Mongoose) that returns the array.
7. The server sends the array back to the client _as a JSON response_.
8. The browser receives the request (asynchronously using `.then()`) and:
    1. loops through the array;
    2. adds the `img` elements to the (previously) empty gallery using `.innerHTML` or similar method.

#### Pros: 
- This is the architecture used by modern frontend frameworks such as React, VueJS and Angular (i.e. large job market).
- It's possible to build a backend server that serves both websites and mobile apps: the JSON is the same for both.
- Server load reduced because the work is offloaded to the browser.

#### Cons:
- Multiple network requests are required, adding to load time and network traffic.
- Browser support can be an issue.
- User experience can be impacted by longer load times.
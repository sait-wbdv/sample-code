# Activity: Static endpoints HTML with `url.parse()`
## Instructions
1. Copy the [starter code](starter/server.js) into a new project directory.
2. Extend the supplied `if`/`else` blocks to include HTML endpoints for the following pages:
    - Contact page: `/contact` or `/contact/index.html`
    - Team page: `/team` or `/team/index.html`
    - Product page: `/products` or `/products/index.html`
    - Gallery page: `/gallery` or `/gallery/index.html`
3. For each new endpoint, send a custom message in the body of the response.
4. Send a 404 error message (with proper status code) if the request URL doesn't match any of the endpoints.

## Level Up
Add support for JSON endpoints:
1. Extend the server above to include a JSON endpoint similar to [this example](../2-json-endpoint.js).
2. Set the endpoint to match `/api/v0/user/123`.
3. Send the following (or similar, different, way different) object as the JSON body:

    ```js
    { 
      id: 123, 
      name: "Mandy Michael", 
      email: "creativetext@example.com"
    }
    ```

3. Ensure the proper MIME Type and status codes are set.
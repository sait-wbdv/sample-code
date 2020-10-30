# Activity: Static endpoints HTML with `url.parse()`
## Instructions
1. Copy the [starter code](starter/server.js) into a new project directory.
2. Using the [endpoint parameter sample code](../4-path-params.js), include server support for the following HTML endpoint:
    
    ```
    GET /photos/:id
    ```

3. If `:id` matches an integer value: respond with an `img` element, using the `:id` parameter to link a valid Lorem Picsum url as the `src`.

## Level Up
Extend the server above to include support for the following JSON endpoint:

```
GET /animals/:id
```

1. Load this [custom animals module](level-up/animals.js) using `require()`.
2. If `:id` matches an id in the `animals` array, respond with the appropriate animal object, converted to JSON.
3. Otherwise, respond with an HTML message `Animal ID not found` or similar.
4. Bonus: add support for a `GET /animals` JSON endpoint. Respond with the entire animals array, converted to JSON.
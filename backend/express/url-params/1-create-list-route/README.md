## Lists: Client-side render
1. Create a view: `definition-list.ejs` with the following content including any needed partials:

    ```html
    <main>
      <h1><%= pageTitle %></h1>
      <dl class="container">
        <!-- TODO: fetch() loop -->
        <!-- https://json-express.herokuapp.com/api/v0/definitions -->
      </dl>
    </main>
    ```

    - Note: This `dl` element arrives to the browser empty and is populated with a separate `fetch()` request to `GET /api/v0/definitions`.

2. Create a route handler: `GET /definitions` will `.render('pages/definition-list')`:

    ```js
    router.get('/definitions', (req, res) => {
      res.render('pages/definition-list', {pageTitle: "Put a loop on it"})
    })
    ```

    - Note: This is not a JSON route (those point to `/api/v0`). This renders an empty page that makes a `json` request later. We could render the list server-side but that takes up server resources. Instead we let the browser do it.

# Activity: RESTful `item` endpoint
The following activity is broken up into two sections:
1. [Create a rendered `list` route](1-create-list-route) with `app.get()` and `response.render()`.
2. Create a rendered `item` route in a view template.

## Items: Server-side render
1. Create a view: `definition-item.ejs` with the following content including any needed partials:

    ```html
    <main class="container">
      <dl>
        <dt><%= definition.term %></dt>
        <dd><%= definition.description %></dd>
      </dl>
    </main>
    ```

2. Create a route handler with a parameter: `GET /definitions/:slug` will `.render('pages/definition-item')`:

      ```js
      /* routes/v0.js */

      router.get('/definitions/:slug', (req, res) => {
        // TODO: Sanititze `req.params.slug`

        const definition = definitions.find(function(def) {
          return def.slug === req.params.slug;
        })

        res.render('pages/definition-item', {
          pageTitle: definition.term,
          definition: definition
        })
      })
      ```
      - Parameters start with `:` (ex, `:slug`) and are passed to `req.params` (ex, `req.params.slug`).
      - Note: This definition term is rendered server-side. We could send an empty `<dl>` like last time and make a separate `json` call for the data, but this saves a request and increases performance. 

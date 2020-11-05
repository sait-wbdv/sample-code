# View Engines
There are [many view engines](https://expressjs.com/en/resources/template-engines.html) to choose from when it comes to Express but the top three are (in Tony's order):
- [EJS](https://ejs.co/)
- [Pug](https://github.com/pugjs/pug) (formerly Jade)
- [handlebars](https://github.com/pillarjs/hbs)

## EJS
EJS (short for Embedded Javascript) is older but well established. It allows you to embed vanilla Javascript into your templates. This makes them very powerfull... almost too powerful.

See [How To Use EJS to Template Your Node Application](https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application) for the basics.

### Target directory structure

```
- public
- views
--- partials
----- footer.ejs
----- head.ejs
----- header.ejs
--- pages
----- index.ejs
----- about.ejs
- package.json
- server.js
```

### `response.render()`
When using a view engine, `response.send()` will be replaced by `response.render()` in our endpoint handlers.

```js
response.render('product-page.ejs',{title: 'Your Product Here', price: 9.99});
```

`product-page.ejs` is the template, which probably includes partial templates inside it, that will: 
1. accept variables from your code from:
    - its second argument, which **must be an object**,
    - the `response.locals` object,
    - other sources you can look up;
2. be compiled into an HTML page, and;
3. be sent as a `text/html` response to the client. The client can't tell the difference between a static HTML page and one compiled from a view engine.

### EJS Templates
EJS is Tony's view engine of choice but he's a boomer. In the world of tech fashion, many in our industry see EJS as outdated (it kind of is). But, it's just fine to start out on. Feel free to use another view engine (at your own risk) such as Pug or handlebars.

### Top EJS Tags
EJS supports many tags but these three are used most of the time:
- `<%= %>`: Output a variable.

    ```html
    <strong><%= product.name %></strong>
    ```
- `<%- %>`: Include a template partial, among other things we won't worry about.
    
    ```
    <header>
      <%- include('../partials/header'); %>
    </header>
    ```

- `<% %>`: Inject javascript into HTML (used for flow control, not outputting variables).

    ```html
    <ul>
    <% products.forEach(function(product) { %>
        <li>
            <strong><%= product.name %></strong>: 
            <em><%= product.price %></em>
        </li>
    <% }); %>
    </ul>
    ```

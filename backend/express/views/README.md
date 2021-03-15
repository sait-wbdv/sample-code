# View Engines
The View Layer is a core component of the MVC design pattern and often encompasses the HTML, CSS and Javascript files that are sent to the browser. 

### Terminology
Template files
: A common method of producing dynamic HTML files from reusable source files.

Template partials
: Repeated page fragments that can be added to any page.

View Engine
: A syntax parser that compiles templates into HTML.

---

### Key Takeaways for Express View Engines
The following apply to all view engines (whether or not you use EJS):
1. Views should only be used to compile HTML. `css` and `js` files should be linked externally to keep concerns separated.
2. Express is view engine agnostic. Although we're covering `ejs` in class, there are many alternatives.
3. Each template engine has its own rules for adding template partials. 
4. `response.render()` will compile a raw template file into an HTML file and send it as a `text/html` response to the client:

    ```js
    app.get('/', function(req, res){
      res.render('index');
    })
    ```
    - `index` refers to `views/index.ejs`
    - path is relative to `views` directory (by default)
    - `.ejs` extension is assumed

5. Templates will accept variables from your express app from:
    - The second argument of `response.render()`, which **must be an object**,
    - The `response.locals` object which is available to all templates,
    - other sources you'll probably never use.
6. The client can't tell the difference between a static HTML page and one compiled from a view engine.

### Example directory structure

```
project-root
  └ public
    └ css
    └ js
    └ images
  └ views
    └ partials
      └ footer.ejs
      └ head.ejs
      └ header.ejs
    └ pages
      └ index.ejs
      └ register.ejs
      └ login.ejs
  ├ package.json
  └ server.js
```

---

## EJS: Embedded JavaScript engine
There are [many view engines](https://expressjs.com/en/resources/template-engines.html) to choose from when it comes to Express but three popular options:
- [EJS](https://ejs.co/)
- [Pug](https://github.com/pugjs/pug) (formerly Jade)
- [handlebars](https://github.com/pillarjs/hbs)

We will be using `ejs` in class but you may use a view engine of your choice for your assignments.

### Key Takeways for EJS
- It allows you to embed vanilla Javascript into your templates.
- It supports vanilla HTML, so you don't have to re-write all your files like you do with `pug`.

See [How To Use EJS to Template Your Node Application](https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application) for the basics.

### Top EJS Tags
EJS has [many tags](https://www.npmjs.com/package/ejs#user-content-tags) but these three are used most of the time:
- `<%= %>`: Output an escaped value.

    ```html
    <strong><%= product.name %></strong>
    ```
- `<%- %>`: Include an unescaped value. We mostly use this with the (EJS-specific) `include()` function for including partial templates:
    
    ```
    <header>
      <%- include('../partials/header'); %>
    </header>
    ```

- `<% %>`: Embed javascript into HTML:

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

    - Note: you can't directly print content to the template but you can create a variable and later output it with `<%= %>`.

### Activities
The following activity is broken up into four sections:
1. [Create a rendered view template](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/1-create-views) with `app.get()` and `response.render()`.
2. [Create and include view partials](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/2-include-partials) in a view template.
3. [Inject site-wide template variables](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/3-global-variables) with `app.use()` and `response.locals`.
4. [Inject page-specific template variables](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/4-local-variables) with `response.render()`.
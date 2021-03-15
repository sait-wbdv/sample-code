# EJS Activity: Inject global template variables
1. Create a rendered view template with `app.get()` and `response.render()`.
2. Create and include view partials in a view template.
3. Inject site-wide template variables with `app.use()` and `response.locals`.
4. Inject page-specific template variables with `response.render()`.

## Assumptions
- You've completed Steps 1 and 2 above.

## Step 3: Site-wide template variables
Now that the template partials are setup we can inject variables into the templates.
1. Above the `response.render()` route handlers add middleware that adds an object to `response.locals`:

    ```js
    app.use(function(){
      response.locals = {
        siteName: 'SAIT WBDV',
        tagline: 'Web Developer Fast Track - Winter 2021',
        copyright: '&copy; 2021 Tony Grimes. MIT License.'
      }
    })
    ```
2. Insert variables into the template partials with the `<%= variable %>`:

    ```html
    <p class="site-name"><%= siteTitle %></p>
    <p class="tagline"><%= tagline %></p>

    ```

3. Repeat for the following variables:
    - `head.ejs`: Add `siteTitle` to `<title>` element.
    - `footer.ejs`: Add `copyright` to `<footer>` element.

**Next Step: Inject global variables**
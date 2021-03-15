# EJS Activity: Inject global template variables
This activity is broken up into four sections:
1. [Create a rendered view template](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/1-create-views) with `app.get()` and `response.render()`.
2. [Create and include view partials](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/2-include-partials) in a view template.
3. [Inject site-wide template variables](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/3-global-variables) with `app.use()` and `response.locals`.
4. Inject page-specific template variables with `response.render()`.

## Assumptions
- You've completed Steps 1-3 above.

## Step 4: Local template variables
1. Inject local variables to a template by passing an object as a second optional parameter to `response.render()`;

    ```js
    router.get('/',function(req,res){
      res.render('pages/index',{pageTitle: 'Program Schedule'});
    })
    ```

2. Output `pageTitle` in the `<title>` element using the `<%= variable %>` syntax:

    ```html
    <!-- views/partials/head.ejs -->
    <title><%= pageTitle %> - <%= siteTitle %></title>
    ```

## Extras
1. Move your route handlers to `routes/index.js` using `express.Router()`.
2. Your finished code should look something like the code in [_finished](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/_finished).
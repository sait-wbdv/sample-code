# EJS Activity: Create view partials
This activity is broken up into four sections:
1. [Create a rendered view template](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/1-create-views) with `app.get()` and `response.render()`.
2. Create and include view partials in a view template.
3. [Inject site-wide template variables](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/3-global-variables) with `app.use()` and `response.locals`.
4. [Inject page-specific template variables](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/4-local-variables) with `response.render()`.
## Assumptions
- You've completed Step 1 above.

## Step 2: Move repeating page elemets to template partials.
1. Create a template file named `footer.ejs` in the `partials` folder.
2. Move the `<footer>` element from `index.ejs` into `partials/footer.ejs:

    ```html
    <!-- views/partials/footer.ejs -->
    <footer>
      &copy; 2021 Tony Grimes. MIT License.
    </footer>  
    ```
3. Include this partial in `index.ejs` using `<%- include() %>`:

    ```html
    <!-- views/pages/index.ejs -->
    ...
    </main>
    <%- include('../partials/footer') %>
    ```

4. Repeat for other repeating elements:
    - `head.ejs`: The elements in the `<head>` that are needed in the other pages.
    - `header.ejs`: The `<header>` and `<nav>` elements.
5. Fix the nav links that were broken if you followed the Pro Tip in Step 10 above.

**Next Step: [Inject global variables](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/views/3-global-variables)**
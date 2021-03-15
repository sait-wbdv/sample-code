# EJS: Getting started
The following tutorial is broken up into four sections:
1. Create a rendered view template with `app.get()` and `response.render()`.
2. Create and include view partials in a view template.
3. Inject site-wide template variables with `app.use()` and `response.locals`.
4. Inject page-specific template variables with `response.render()`.

## 1. Create a rendered view template
1. Copy [1-starter](../1-starter) into a new project directory. It should have this directory structure:

    ```
    project-root
      └ public
        └ assets
          └ css
          └ js
          └ images
        └ exercises.html
        └ index.html
        └ library.html
      ├ package.json
      └ server.js
    ```

2. If desired, change the name of the project in `package.json`.
3. From the command line, install `ejs` as a project dependency.

    ```
    $ npm install ejs
    ```

4. In `server.js`, after you run `express()`, set `ejs` as the server's view engine:

    ```js
    const app = express();
    app.set('view engine', 'ejs');
    ```

5. Create a `views` directory in your root directory. Inside `views`, create a `pages` and `partials` directories
    
    ```
    project-root
      └ public
      └ views
        └ pages
        └ partials
      ├ package.json
      └ server.js
    ```

6. Move each html file from `public` and move them into `views/pages`.
7. Change the file extensions from `.html` to `.ejs`. When you are done you should have a directory structure similar to this one:

    ```
    project-root
      └ public
        └ assets
          └ css
          └ js
          └ images
      └ views
        └ pages
          └ exercises.ejs
          └ index.ejs
          └ library.ejs
      ├ package.json
      └ server.js
    ```

8. Add a route for the home page that renders `index.ejs`:

    ```js
    app.get('/',function(req,res){
      res.render('index');
    })
    ```

    - Note: The `.ejs` extension is not needed since you set the `view engine` in Step 4 (`.ejs` is assumed).

9. Repeat with the remaining pages.
10. Pro Tip: Change the endpoints from `/library.html` to `/library`:

    ```js
    app.get('/library',function(req,res){
      res.render('library');
    })
    ```

    - Note: This breaks the navigation links but we'll fix these in the next section.

## 2. Move repeating page elemets to template partials.
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

## 3. Site-wide template variables
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

## 4. Add local template variables
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
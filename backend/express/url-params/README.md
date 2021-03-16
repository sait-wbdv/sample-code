# Activity: Create a RESTful endpoint
## Setup
1. Copy [_starter](_starter) into a new project directory. It should have this directory structure:
  
    ```
    project-root
      ├ public
      └ routes
        └ index.js
      └ views
        └ pages
          └ exercises.ejs
          └ index.ejs
          └ library.ejs
        └ partials
          └ footer.ejs
          └ head.ejs
          └ header.ejs
      ├ package.json
      └ server.js
    ```

2. If desired, change the name of the project in `package.json`.

### Activities
The following activity is broken up into two sections:
1. [Create a rendered `list` route](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/url-params/1-create-list-route) with `app.get()` and `response.render()`.
2. [Create a rendered `item` route](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/url-params/2-create-item-route) in a view template.
3. In the `partials/header` view, add a navigation link to the `/definitions` list.

When you've completed these steps, your code should look something like the [finished code](_finished)
- Extras: [Complete TODOs](https://github.com/sait-wbdv/sample-code/tree/master/backend/express/url-params/3-extra-todos)
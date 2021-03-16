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
1. [Create a rendered `list` route](1-create-list-route) with `app.get()` and `response.render()`.
2. [Create a rendered `item` route](2-create-item-route) in a view template.

When you've completed these steps, your code should look something like the [finished code](_finished)
- Extras: [Complete TODOs](3-extra-todos)
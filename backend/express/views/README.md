# View Engines
There are [many view engines](https://expressjs.com/en/resources/template-engines.html) to choose from when it comes to Express but the top three are (in Tony's order):
- [EJS](https://ejs.co/)
- [Pug](https://github.com/pugjs/pug) (formerly Jade)
- [handlebars](https://github.com/pillarjs/hbs)

## EJS
EJS (short for Embedded Javascript) is older but well established.

### Installing and setting EJS
Once use EJS as a view engine, you'll need to:
1. Install the `ejs` module from the command line:

    ```shell
    $ npm install ejs
    ```
2. Load the module at the top of `server.js`:

    ```js
    const ejs = require('ejs');
    ```
3. Set `ejs` as your view engine after you've created your app with `const app = express();`:

    ```js
    app.set('view engine', 'ejs');
    ```

### `app.render()`


### Top EJS tags
EJS supports many tags but these three are used most of the time:
- `<% %>`: Inject javascript into HTML (used for flow control, not outting variables).
- `<%= %>`: Output a variable.
- `<%- %>`: Include a template partial, among other things we won't worry about.
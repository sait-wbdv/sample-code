# Activity: Install momentjs in an existing project
The goal of this activity is to install momentjs and use the package to print out today's date.

## Prerequisites
1. There is a `package.json` file present in the project root directory.
2. `moment` is not listed as a dependency in `package.json`.
3. You've installed your existing dependencies (only nodemon at this point) by entering the following in your terminal:

    ```shell
    $ npm install
    ```

## Instructions
1. Copy the [starter code](starter/server.js) into a new project directory.
2. Navigate to this directory using your terminal.
3. Install the `momentjs` package with the following command:

    ```shell
    $ npm install moment
    ```

    - Note that you can also use the shorter `npm i moment` command. `npm i` and `npm install` are the same command.
4. You can now use `moment` in your application. Load the module into `server.js`:

    ```js
    const moment = require('moment');
    ```

5. Refactor `server.js` so that it logs today's date instead of "hello npm". See the [monent home page](https://momentjs.com/) for examples of how to use `moment`.

### Level-up: Use `moment` with `http`
1. Take one of the example `http` applications from last week and copy it into a new project directory.
2. Initialize this app as a new npm project.
3. Follow the steps above to install moment.
4. Create the following endpoint that responds with today's date:

    ```
    GET /today
    ```
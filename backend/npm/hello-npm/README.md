# Activity: Initialize a new project and install nodemon
The goal of this activity is to install nodemon as a "dev dependency" so we don't have to manually stop and restart our node app everytime we want to test changes. This is a dev dependency because we only need this functionality on our local machines while we develop our application.

## Prerequisites
1. There is no `package.json` or `package-lock.json` file present in the project root directory.
2. There is no `node_modules` directory in the project root directory.

## Instructions
1. Copy the [starter code](starter/server.js) into a new project directory.
2. Navigate to this directory using your terminal.
3. Initialize a new NPM project with the following command:

    ```shell
    $ npm init -y
    ```
    
    - `-y` skips the set up questions; defaults are fine for now.

4. A `package.json` file was created in the current directory. This directory is now an NPM project. See: [Anatomy of a `package.json` File](https://www.digitalocean.com/community/tutorials/nodejs-package-json) on Digital Ocean for a description of the items in this file.
5. Install nodemon with the following command:

    ```shell
    $ npm install nodemon --save-dev
    ```

    - `--save-dev` adds nodemon as a development dependency in `package.json` since it is not needed for the production server.
    - Note: `server.js` does not need `nodemon` to run. Developer dependencies often fall into the quality-of-life bucket.
6. A `node-modules` directory was created in the current directory. This is where npm will store your dependencies.
7. To run `server.js` with nodemon, enter the following terminal command:

    ```shell
    $ nodemon server.js
    ```

    - Notice that previously, we started our apps with `node server.js`. 
    - `nodemon server.js` does the same thing as `node server.js` but it also listens for changes to our files. It will restart our app whenever we save a file.
    - nodemon is not needed on production servers, which is why it's installed as a dev dependency; we only use it while we're developing our app. By installing it as a dev dependency, production servers will know not to install it when it deploys our application.
8. To see nodemon in action, edit and save your `server.js` file. Notice that nodemon restarted your node app when you saved the file. You're well on your way to being a lazy coder.

### Level-up: Be even lazier
Typing `nodemon server.js` is a nice way to avoid restarting our server constantly, but we can be even lazier by storing this command in a custom script:
1. Open your `package.json` file in your editor.
2. You should see something like this in the file:

    ```js
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node server.js"
    }
    ```

3. Add a third script called `dev` (or similar) that starts your app using nodemon. When you're finished your `scripts` object should look something like this:

    ```js
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node server.js",
      "dev": "nodemon server.js"
    }
    ```

4. Save `package.json` and test your new script by entering this command in your terminal:

    ```shell
    $ npm run dev
    ```
  
  - Unlike `npm start` our custom scripts need to be run with the command: `npm run <script-name>`.
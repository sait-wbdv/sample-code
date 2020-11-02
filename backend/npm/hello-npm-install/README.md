# Activity: Installing the dependencies of an existing project
The goal of this activity is to simulate the setup of an existing npm project that was cloned from a remote repo. Since the `node_modules` directory is rarely committed to a repo, we rely on npm to install all the needed dependencies so we can start a Node application.

## Prerequisites
1. There is a `package.json` file present in the project root directory.
2. There is _not_ an `node_modules` in the project root directory.
3. There may or may not be a `package-lock.json` file.

## Instructions
1. Clone the [Hello Express](https://github.com/sait-wbdv/hello-express) repository to your local machine.
2. Try starting `server.js` with the following terminal command:

    ```shell
    $ node server.js
    ```

    - You should see: `Error: Cannot find module 'express'`
    - If you see a `package.json` file but there is no `node_modules` directory, then the dependencies of this application will need to be installed before the application will start.

3. Install the project dependencies with the following command:

    ```shell
    $ npm install
    ```
4. Repeat Step 2. The app should now start.

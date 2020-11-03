# Express web server
## Sample code
- [hello express](hello-express)

## Getting started
All of the activities in this directory assume that you have installed `express`. A `package.json` file will be present the above examples/activites.

## Installing Express from scratch
If you're starting from scratch follow these instructions.

### Prerequisites
1. There is no `package.json` file nor a `node_modules` file present in the project root directory.
2. You have an entry page (i.e. `server.js`) present in a project directory.

### Instructions
1. Navigate to your project directory using your terminal.
2. Initialize a new NPM project with the following command:

    ```shell
    $ npm init -y
    ```
    
    - `-y` skips the set up questions; defaults are fine for now.

3. A `package.json` file was created in the current directory. This directory is now an NPM project. Edit `package.json` to match your needs. See: [Anatomy of a `package.json` File](https://www.digitalocean.com/community/tutorials/nodejs-package-json) on Digital Ocean for a description of the items in this file.
4. Install `express` as a project dependency:

    ```shell
    $ npm install express
    ```

    `express` should now be listed in `package.json` and the files should be downloaded to `node_modules`.
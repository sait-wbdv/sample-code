# Connecting to MongoDB Atlas with Mongoose
## Assumptions
- [MongoDB Atlas account created and configured](https://github.com/sait-wbdv/sample-code/tree/master/backend/mongoose/1-atlas-getting-started).
- `.env` file exists in project root with a connection string set:

    ```html
    PORT=3000
    MONGODB_URL=mongodb+srv://tony:password123@cluster0<cluster-sub-domain>.mongodb.net/sait-wbdv?retryWrites=true&w=majority
    ```

    - `<cluster-sub-domain>` will be replaced with your personal cluster sub-domain (random string of characters).
    - replace `tony:password123` with your DB User credentials.

## Instructions
1. Clone this repo to your machine.
2. Add your `.env` file to the root directory.
3. Navigation to your root directory on the command line.
4. Install dependencies:

    ```
    $ npm install
    ```

5. Connect to your database:

    ```
    $ node server.js
    ```

    - Success: `Connected to DB...`

## Troubleshooting Errors
- `Accessing non-existent property 'MongoError' of module exports inside circular dependency`
  - It's safe to ignore this error.
- `The 'uri' parameter to 'openUri()' must be a string, got "undefined"`
  - You probably don't have a `.env` file or it's not loading correctly.
- The main error you will run into when connecting is `Authentication Failed`. Try the following:
  - Confirm you've set the correct username/password in your connection string. You can reset the password in the Atlas control panel.
  - Confirm you've changed the database in your connection string to `winter-2021` or similar.
  - Confirm you've whitelisted all IPs in Atlas. 
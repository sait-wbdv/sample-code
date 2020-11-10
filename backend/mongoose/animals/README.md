# Sample Animals Import Script
This is a sample import script you can use to import data into your MongoDB database.
1. Edit the `./models` and `./seeds` files to match your data.
2. Add your connection details to a `.env` in the root of the project.
3. From the terminal, enter `node import.js` to import your data.

## Activities: Refactor and Deploy
1. The Mongoose model listed in `./model/animal.js` does not match the data in `./seeds/animals.js` file. Modify the model to match the data structure of the objects listed in the array.
2. Create a `server.js` that will use this animals data. Use [hello express](../../express/hello-express) as starter code.
    1. Install and load
        - `mongoose`
        - `dotenv`
        - `ejs`
    2. Load `./models/animal.js`
    3. Connect to Atlas just after the `express.static()` middleware.
3. Add a single endpoint, `GET /api/v0/animals` that returns the entire list of animals as a JSON response.
4. Deploy this app to Heroku, using MongoDB Atlas as a backend.
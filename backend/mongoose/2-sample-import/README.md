# Importing data into Atlas 
## Assumptions
- [MongoDB Atlas account created and configured]().

## Option 1: Import data using MongoDB Compass
1. Assumption: You've created a `json` file containing the data you'd like to import.
2. [Install Compass](https://www.mongodb.com/products/compass)
3. Add your connection string.
    - MongoDB Atlas will create this for you.
4. Create a Database (call it `wbdv-sait` or similar)
5. Create a Collection (plural noun like `gallery` or `images`)
6. Click "Import Data" and upload your `json` file.

## Option 2: Node Import Script
1. Assumption: `.env` file exists in project root with a connection string set:

    ```html
    PORT=3000
    MONGODB_URL=mongodb+srv://tony:password123@cluster0<cluster-sub-domain>.mongodb.net/sait-wbdv?retryWrites=true&w=majority
    ```

    - `<cluster-sub-domain>` will be replaced with your personal cluster sub-domain (random string of characters).
    - replace `tony:password123` with your DB User credentials.

2. Optional: Import sample data (Lorem animal photos) to test connection.
    
    ```
    $ node import.js
    ```

3. Refactor `models/animals.js` to fit your data.
4. Add your data to `seeds` and export it as a module.
5. Refactor `import.js` to use your data.
    1. Change `dbSeed` to use your data.
    2. Change `Animal` to use the model you created in Step 3.
6. Change `Animal.insertMany` to match your model variable name, if you changed it.
7. Import your data!

    ```
    $ node import.js
    ```


# Connecting to MongoDB
## Prerequisites
1. There is a `package.json` file present in your project root directory.
2. The following modules are installed and are present in `node_modules`:
    - `mongoose`
    - `dotenv`
3. You've created a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and have completed the [setup steps](../).
4. You've saved your Atlas connection string in a `.env` file in the root of your project directory. A [`.env-sample`](.env-sample) has been provided as a template.

## Code Walkthrough
See: [`server.js`](server.js)

Mongoose needs to be installed like any other module. It will install MongoDB for us. 

```js
const mongoose = require('mongoose');
```

`dotenv` allows us to store our Atlas connection string in a `.env` file (that is excluded from our git repo).

```js
const dotenv = require('dotenv').config();
```

Using the Atlas connection string, we configure the connection to our Atlas database.

```js
mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true,useNewUrlParser: true });

const db = mongoose.connection;
```

Then we set our event handlers for the connection:

```js
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log('Connected to DB...');
});
```

If you see "Connected to DB..." in the console, you're ready to start the Mongoose [Getting Started](https://mongoosejs.com/docs/) tutorial.
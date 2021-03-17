# Connecting to MongoDB
## Prerequisites
1. There is a `package.json` file present in your project root directory.
2. The following modules are installed and are present in `node_modules`:
    - `mongoose`
    - `dotenv`
3. You've created a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and have completed the [setup steps](../).
4. You've saved your Atlas connection string in a `.env` file in the root of your project directory. A [`.env-sample`](.env-sample) has been provided as a template.

## Mongoose: Getting Started
See: [Getting Started Tutorial](https://mongoosejs.com/docs/)

### Terminology

<dl>
  <dt>Schema</dt>
  <dd>Schemas defined the structure that a MongoDB document must conform to before it can be inserted into a collection. In other words, each schema maps to a MongoDB collection and defines the shape of the documents within that collection.</dd>
  <dt>Model</dt>
  <dd>A Schema is compiled into a Model, which is a template that you create documents from.</dd>
  <dt>Document</dt>
  <dd>Mongoose documents are an upgraded version of a MongoDB document. They must conform to the Schema definition</dd>
</dl>

### Why Mongoose?
MongoDB is very loose in the way it stores data. One document in a collection can be very different from another in the same collection. This means that data integrity can be a problem.

Mongoose forces documents in any given collection to conform to a common structure, which is defined by a Schema.

Mongoose also gives us added CRUD functionality that makes our lives easier when accessing data in a collection.

### Key Takeaways
- The mongoose life-cycle consists of three stages:
    1. Create a Schema;

        ```js
        const kittySchema = new mongoose.Schema({
          name: String
        });
        ```

        - This is the minimum Schema definition: `name: String` defines the value type that a kitten `name` must conform to. 
    2. Compile a Schema into a Model;
        
        ```js
        const Kitten = mongoose.model('Kitten', kittySchema);
        ```

        - Model variable names are capitalized and singular by default.

    3. Instantiate a Model to create a document.

        ```js
        const silence = new Kitten({ name: 'Silence' });
        ```

        - `silence` is now an document (JSON object) that can be inserted into a Collection. The Mongoose model ensures that the format of the document conforms to the Schema.
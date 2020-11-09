# MongoDB Atlas
We will not be installing MongoDB directly on our machines. Instead, we will be connecting to remote collections using the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud hosting platform. 

## Creating and configuring a MongoDB Atlas account
1. Create an free account with [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). You will be prompted to set up your account (the Atlas interface will point you in the right direction):
    1. Build your first cluster
        - Organization: SAIT WBDV (or whatever)
        - Project Name: Animals (or whatever)
        - Preferred Language: JavaScript (obvs)
        - Plan: Shared Clusters (Free, duh)
        - Cloud Provider and Region: It probably doesn't matter but Tony uses `AWS:Oregon`.
        - Defaults for the rest are fine.
    2. Create your first database user -> `Database Access`
        - Authentication Method: Password
        - Username: something you'll remember (Tony's is `aragog`)
        - Password: Do NOT use a password you use regularly; it's too easy to accidentally push it to a repo. Maybe try using [Namor](https://acidtone.github.io/namor/) to come up with a new one you can remember.
        - Role: Read and write to any database (avoid Atlas admin for public applications)
    3. Whitelist your IP address -> `Network Access`
        - Click `Allow Access from Anywhere` (see caveat below)
        - Caveat: This is inherently insecure but is good enough for class work. Do NOT add any sensitive information to any databases to this cluster; Tony will find it and profit off your hard work.
    4. Load Sample Data (Optional)
        - These are datasets that are more complex than we need for this course but they are a nice resource if you want to dip into heavier demo projects.
    5. Connect to your cluster -> `Connect your application`
        1. Copy the template connection string.
        2. Save it in a `.env` file in your project (see [hello-mongoose](hello-mongoose) below) in the following format (some details will be different than what you see):

            ```
            MONGODB_URL=mongodb+srv://aragog:<password>@cluster0.blmbb.mongodb.net/<dbname>?retryWrites=true&w=majority
            ```

            - It's important that you use `MONGDB_URL` as a variable name; this is what Heroku uses to connect to Atlas (which we'll be doing tomorrow).
            - aragog is tony's database user; name yours whatever. Replace `<password>` with the `password` (that is totally not one you normally use) that you created in Step 1.2.
        3. Replace `<password>` with the password you used when you created your DB User in Step 2. You didn't forget it did you? If so, you can just re-create your db user.
        4. Replace `<dbname>` with a name of your choice. Databases can hold more than one collection so the `<dbname>` can be general, like `wbdv` or `sait`.
2. Connect your new Atlas cluster using the Mongoose package.
    - See: [hello-mongoose](hello-mongoose)
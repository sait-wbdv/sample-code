# MongoDB Atlas
We will not be installing MongoDB directly on our machines. Instead, we will be connecting to remote collections using the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud hosting platform. 

## 1. Create a MongoDB Atlas account
1. Create an free account with [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). You will be prompted to set up your account (the Atlas interface will point you in the right direction):
2. **Screen 1**: The basics
    - **Organization**: SAIT WBDV (or whatever)
    - **Project Name**: Animals (or whatever)
    - **Preferred Language**: JavaScript (obvs)

3. **Screen 2**: Choose a plan
    - **Plan**: Shared Clusters (Free, duh)

4. **Screen 3**: Create a Shared Cluster
    - **Cloud Provider**: This doesn't really matter but Tony uses `AWS`.
    - **Region**: Tony uses `Oregon` (it's closest).

After you submit, it'll take awhile for the server to set up your Cluster.

When it's done:

## 2. Create a database user
Your Express app will need a login to access any databases you set up. You will need your login information later for your connection string.
1. From the Atlas Admin panel, click `Database Access` (under "Security" on the left-hand side).
2. `Add New Database User`
    - **Authentication Method**: _Password_
    - **Username**: something you'll remember.
    - **Password**: Do NOT use a password you use regularly; it's too easy to accidentally push it to a repo. 
    - **Database User Privileges**: _Read and write to any database_ (avoid _Atlas admin_ unless you know you need it)

## 3. Whitelist your IP address
1. Click `Network Access` (under _Database Access_)
2. `Add IP Address`
3. `Allow Access from Anywhere`
    - Caveat: This is inherently insecure but is good enough for class work. Do NOT add any sensitive information to any databases to this cluster; Tony will find it and profit off your hard work.

## Optional: Load Sample Data
These are datasets that are more complex than we need for this course but they are a nice resource if you want to dip into heavier demo projects.

## 4. Create your Connection String
The Connection String holds all the information your application needs to connect to your database. This will be stored in your `.env` file (along with your `PORT` number). 
1. Click on `Clusters` (under "Data Storage" in the left-hand menu)
2. Under Clusters, click `Connect`.
3. `Connect your application`
4. Copy the `Connection String` (starting with `mongodb+srv://`) into an `.env` file like so:

    ```html
    PORT=3000
    MONGODB_URL=mongodb+srv://<username>:<password>@cluster0<some-gibberish>.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    ```

    - Your connection string will have real values, except for:
      - `<password>`. Paste your DB password (created in Step 2.2) here.
      - Change `myFirstDatabase` to `sait`, `winter-2021` or similar.
    - It's important that you use `MONGODB_URL` as a variable name; this is what Heroku uses to connect to Atlas (that's tomorrow).
2. Connect your new Atlas cluster using the Mongoose package.
- See: [hello-atlas](../2-hello-atlas)
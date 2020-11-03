# Deploying to Heroku
## Prerequisites
1. You have created a [free Heroku account](https://signup.heroku.com/).
2. You have an express app published to a remote repository on GitHub. If not, you can clone [this one](https://github.com/sait-wbdv/hello-express).
3. There is a `package.json` file present in your project root directory.
4. You have a `start` script defined in your `package.json` file:

    ```json
    "scripts": {
        "start": "node server.js"
      },
    ```

    - Note: this may be an outdated requirement. Heroku now seems to work just fine without it?

## Instructions
1. In the Dashboard: New > Create new app
2. Create an `App name` and `Region` (United States is best for us).
    - Note that your App name needs to be unique across all of Heroku so you might need to get creative.
    
3. In the Dashboard: Under Deploy > Deployment method, select Github and sign in with your preferred GH account.
4. Once you're signed in, select the GH repo that contains the app you'd like to deploy.
5. Either:
    1. Enable Automatic Deploys to have Heroku deploy your repo any time it notices an update.
    2. Manually deploy: select the branch and click Deploy Branch. Note: there is a limit to how many times you can deploy your app per minute.
6. When Heroku is done doing its business, click View App and hopefully you don't receive an error.
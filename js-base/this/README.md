# The `this` keyword
## Key Takeaways
1. Javascript creates the `this` keyword everytime an Execution Context is created.
2. The value of `this` depends on _how_ an execution context is created:
    - Global Execution Context ([global sample code](1-hello-this.js)): 
        - In the browser: `this` references the `window` object.
        - In node: `this` references an empty object. See [this Stack Overflow article](https://stackoverflow.com/questions/43627622/what-is-the-global-object-in-nodejs) if you want to go down that rabbit hole.
    - Inside an invoked function ([function sample code](2-functions.js)):
        - In the browser: `this` references the `window` global object.
        - In node: `this` references the Node global object (also accessible with the `global` keyword).
    - Inside an invoked _method_ ([object sample code](3-objects.js)): `this` points to its containing object.
    - Inside an invoked function _that's inside_ a method: `this` is the same as it is for invoked functions, above, _not_ the containing object (which you would expect). Many think this part of Javascript is broken. Tony agrees. See this [fixed sample code](3-objects-fixed.js) for a workaround.
3. **Best practice for beginners**: Don't use `this` unless you're _directly_ within an object method. Otherwise, stay away!
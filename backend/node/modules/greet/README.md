# Three Stages of a `greet` feature
1. [Loose code sitting in the main script](1-base.js)
    - This is not reusable code. Not is it maintainable. It alos might interfere with other code being executed in the same file.
2. [`greet` as a function](2-function.js)
    - This function protects our code by creating a new variable environment. It still has problems though: it's not reusable for other applications and it's still not very maintainable because it's still located in the  
3. [`greet` as a separate module](3-greet.js)
    - This module is then exported to [another Javascript file](3b-server.js) using `require`.
    - This third stage still isn't perfect but its much better than before.
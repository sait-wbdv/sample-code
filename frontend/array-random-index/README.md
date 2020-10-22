# Finding a random item in an array

[Starter Code](animals-starter)

## Instructions
1. Create an empty variable where we will store the html that will eventually be printed to the page.

    ```js
    let outputHTML = '';
    ```

2. Create a random integer between 0 and the length of the image list (see [`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
)):

    ```js
    const randInteger = Math.floor(Math.random() * Math.floor(imgList.length));
    ```

3. Using template literals and your random number, create an HTML string that creates an `img` element and point the `src` to a random image ID from the animals array:

    ```js
    outputHTML = `<img src="https://picsum.photos/id/${imgList[randInteger]}/250/250" alt="Random Lorem Picsum">`;
    ```
4. Using `document.querySelector()` and `element.innerHTML`, print your `outputHTML` to your web page:

    ```js
    document.querySelector('body').innerHTML = outputHTML;
    ```

**Spoiler Alert**: [Finished Code](animals-finished)
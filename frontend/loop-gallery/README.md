# Looping an Array

## Array of numbers
[Starter Code](basic-starter)

### Instructions
1. Create a variable where we will store the html that will eventually be printed to the page

    ```js
    let outputHTML = ''; 
    ```

2. Using `document.querySelector()`, assign the .gallery element to a variable.

    ```js
    const gallery = document.querySelector('.gallery');  
    ```

3. Loop through `imgList` using `array.forEach()`. 

    ```js
    imgList.forEach(function(item){
      // Step 4 code here
    }); 
    ```

4. _Inside the loop_, for each image ID:
    1. Create an img element using string literals.
    2. Point the image `src` to Lorem Picusm, using the current image ID in the URL
    3. Append the `img` html string to the html variable you created earlier.

    ```js
    outputHTML += `<img src="https://picsum.photos/id/${item}/250/250" alt="Random Lorem Picsum">`;
    ```

5. Using element.innHTML, add the html img list to the .gallery variable you created earlier.

    ```js
    gallery.innerHTML = outputHTML;
    ```

**Spoiler Alert**: [Finished Code](basic-finished)
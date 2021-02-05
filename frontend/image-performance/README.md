# Image Performance
[Starter page](starter) - A PoC of a list of blog articles.

## Tasks
Optimize the images in the above webpage.

---

### Reduce "jank" with image `width` and `height` attributes
1. For each image displayed in the project, locate/record the `width` and `height` of the file.
2. Add `width` and `height` attributes to their respective `img` tags in the project.
3. Reload the page to ensure each `img` has been marked up correctly.
4. Purposely break your image paths by deleting a character from the `src` attribute.
5. Reload your page, to confirm  the browser is recognizing your `width` and `height` attributes. There should be an empty in the page layout that is `width` x `height`.

---

{% comment %}

### Reduce file size with WebP
Using [Squoosh.app](https://squoosh.app/) (or similar), compress these [`images`](https://github.com/sait-wbdv/sample-code/tree/master/frontend/image-performance/images) starting with the `lrg`. 

**See [Squoosh Cheatsheet](https://sait-wbdv.github.io/winter2021/cheatsheets/squoosh)**

{% endcomment %}

---

### Define minimally responsive images
1. Set a `max-width` of `100%` on your images:

    ```css
    img {
      max-width: 100%;
    }
    ```
2. Change the `src` attribute on the images in the project to use an image size lower than the `lrg` size. Can you get away with `sm`?

---

### Optimize image bandwidth with `srcset`
1. Using the [`srcset`](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) attribute define the alternate images sizes that are available for a particular image. Starting with the small version: 
    
    ```html
    <img src="default.jpg" alt="some image" srcset="small.jpg 500w">
    ```

    - `default.jpg` is the fallback in case the browser doesn't support `srcset`.
    - The number associated with the `w` parameter should match the width of your image. The browser makes decisions based on this information.

2. Repeat for the other image sizes, separated by commas. Don't be afraid to add line breaks and indentation to make your code more readable.

    ```html
    <img 
      src="default.jpg" 
      alt="some image" 
      srcset="
        small.jpg 500w,
        medium.jpg 1000w,
        large.jpg 2000w
    ">
    ```

    **Consideration for Chrome**: It will load a larger image if you increase the viewport but will _not_ load a smaller image if you decrease the viewport.
    {:.notice--warning}

3. Deploy your page to GH Pages and test your code on a real phone.

--- 

### Improving network performance with native lazy loading
1. Baseline test of the starter page Performance.
2. Add `loading="lazy"` to any `img` element that is "below the fold".
3. Comparison test of the lazy loading page Performance.
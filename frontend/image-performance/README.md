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

### Reduce file size with WebP
Using [Squoosh.app](https://squoosh.app/) (or similar), compress these [`images`](images) starting with the `lrg`. 

**See [Squoosh Cheatsheet](https://sait-wbdv.github.io/cheatsheets/squoosh)**

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
1. Assign an optimal viewport width for each of the images widths located in the [images](https://github.com/sait-wbdv/sample-code/tree/master/frontend/image-performance/images) directory:
    - `sm`: `500px`
    - `md`: `1000px`
    - `lrg`: `2000px`
2. Using the [`srcset`](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) attribute, override the default `src` image with your chosen images and viewport widths. For example, if we want `sm` images to be used when the viewport width is `500px`:
    
    ```html
    <img src="default.jpg" alt="some image" srcset="small.jpg 500w">
    ```

3. Repeat for the other image sizes, separated by commas. Don't be afraid to add line breaks and indentation to make your code more readable.

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

4. Add support for retina displays using the `x` notation. Swap out a larger image on mobile if the display is high resolution.

    ```html
    <img 
      src="default.jpg" 
      alt="some image" 
      srcset="
        small.jpg 500w,
        medium.jpg 500w 2x,
        medium.jpg 1000w,
        large.jpg 2000w
    ">
    ```
5. Deploy your page to GH Pages and test your code on a real phone.

---

### Set a default image width with `sizes` attribute

--- 

### Manage network resources with native lazy loading
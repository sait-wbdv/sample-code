# Sass Activity: CSS cleanup
## Prerequisites
- This activity assumes you have configured your sass compiler to listen to a `scss` directory in your project root and the compile location is a `css` directory, also in the project root.

## Instructions
See: [Starter Code](starter)

The above project is still in the "Brute Force" stage of development: it works, but the code could be cleaner.
1. Copy the starter code into a new project folder.
2. Move the embedded CSS into a dedicated SCSS directory in the project root.
3. Create _partials_ for the following files:
    - `_reset.scss`
    - `_fonts.scss`
    - `_nav.scss`
4. Create a `main.scss` file and `@import` the above partials.
5. Convert CSS to Sass:
    - move colours and fonts into variables;
    - use nesting and `&` to cleanup declarations on the `nav` element;
    - optional: use built-in sass functions to control the colour of your `:hover` and `:active` effects.
6. Compile your `.scss` files into minified `.css` and `.css.map` files located in a `css` directory in your project root.
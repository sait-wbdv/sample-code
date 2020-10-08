# SVG - Scalable Vector Graphics
## Sample Code
- [Activity 1 Starter Code](anatomy)
- [Activity 2 Starter Code](starter)
- [No Bugs!](no-bugs)
- [Pinball Cradle](cradle)
- [Flipper Animation](cradle/animated.html)

## Key Takeaways
- `xmlns` is needed if you want to support non-HTML5 browsers (we probably do) or XML parsers (we probably don't).
- `viewBox` is the key to a properly responsive SVG. While the values are often pixel-based, the values of this attribute really set the aspect ratio and provide a reference grid for the rest of the `svg` objects to map to.
  - _Note_: none of the graphics contained inside an `svg` will be viewable outside the `viewBox`.
- `preserveAspectRatio` can be set to `none` if you don't want the browser to respect the aspect ratio set by the `viewBox`. Otherwise, the browser will try its best to not violate the aspect ratio. 
- `width` and `height` attributes set an optional default size for the `svg` that can be overridden with CSS.
- `svg` is its own specification with its own style properties. Although you can style them with CSS, you need to use the proper `svg` properties. For example, use `fill` instead of `background-color`.

### Activity 1: SVG Anatomy
1. Copy the [Anatomy Starter](anatomy) code into a new project.
2. Using your preferred vector editor, create and export the following SVG objects as separate files.
    - Line
    - Curve
    - Circle
    - Square
    - Polygon
    - Star
4. Open each file in your code (not vector) editor. What do you see?
    - Does it have `width` and `height` set?
    - Does it have a `viewBox`?
    - Are the styles in a `style` element, assigned as an attribute or an inline style?
5. Try different export settings and repeat. Are there any differences in the exports?
6. Decide on a final format and optimize it with [SVGOMG](https://jakearchibald.github.io/svgomg/).

### Activity 2: SVG in HTML
Take a design from yesterdays session and the following [Starter Code](starter):
1. Insert the SVG as an `img` element.
2. Insert it as a `background-image`.
3. Insert it as an inline SVG.
4. Ask yourself and experiment: What effect does `width`, `height` and `viewBox` have on each element?
5. Inline `svg` elements can be styled with CSS!
    1. Identify the objects within your inline `svg` that you'd like to style.
    2. Add a class attribute so we can target it with CSS.
    3. Change the background color with the `fill` property.
    4. Add a stroke with the `stroke` (and associated) property.

### Activity 3: Themed SVGs
Take the [Pinball Cradle](cradle) example and change the design to a new colour scheme.

## Terminology
Source: [How to Scale SVG](https://css-tricks.com/scale-svg/)
<dl>
  <dt><code>viewBox</code> Attribute</dt>
  <dd>The viewBox is an attribute of the <code>svg</code> element. Its value is a list of four numbers, separated by whitespace or commas: <strong>x</strong>, <strong>y</strong>, <strong>width</strong>, <strong>height</strong>. <strong>x</strong> and <strong>y</strong> set the top-left position of the coordinate system <em>inside</em> the <code>svg</code>. <strong>width</strong> and <strong>height</strong> define, among other things, the aspect ratio of the <code>svg</code>.</dd>
  <dt>preserveAspectRatio</dt>
  <dd>When there is a viewBox, preserveAspectRatio describes how the image should scale if the aspect ratio of the viewBox doesn’t match the aspect ratio of the viewport.</dd>
  <dt>Presentational Attributes</dt>
  <dd><code>svg</code> attributes, such as <code>fill</code> and <code>stroke</code>, that can be overridden by CSS.</dd>
  <dt>Precision</dt>
  <dd>An <code>svg</code> term for the number of decimal places that are used to place objects (among other things) within the <code>viewBox</code>.
</dl>



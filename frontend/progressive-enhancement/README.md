# Progressive Enhancement Examples
## 1. CSS error handling with `border-radius`
[Demo](border-radius)

### Activity: Explore `border-radius` browser support
1. Open the [Demo](border-radius) in Dev Tools and select the `.box` element.
2. Toggle the `border-radius` declaration off and on. What does the design look like in browsers that don't support this property? Is this change acceptable?
3. Open [Can I Use](https://caniuse.com) and look up `border-radius`. Which browsers don't support this property? Do we need to worry?

---

## 2. CSS error handling with `shape-outside`
[Demo](shape-outside)

### Activity: Explore `shape-outside` browser support
1. Open the [Demo](shape-outside) in Dev Tools and select the `img` element.
2. Toggle the `shape-outside` declaration off and on. What does the design look like in browsers that don't support this property?
3. Open [Can I Use](https://caniuse.com) and look up `shape-outside`. Which browsers don't support this property? Do we need to worry?

---

## 3. CSS error handling with two properties
[Demo](clip-path)

### Activity: Explore browser support with 2-property combinations
See: [Punnet Square](https://en.wikipedia.org/wiki/Punnett_square) for an example of 2-item combinations.

1. Open the [Demo](clip-path) in Dev Tools and select the `.polygon` element.
2. Toggle the `shape-outside` and `clip-path` declarations off and on in the four possible combinations. Are there any combinations that break the design?
3. Open [Can I Use](https://caniuse.com) and look up `shape-outside` and `clip-path`. Which browsers fall into the "problem" combination(s)?

---

## 4. CSS Overrides with flexbox and viewport units
[Demo](hero)

### Activity: Browser support bug hunt
1. Choose any of the projects you've created in this course or choose an example project from the `sample-code` repo.
2. Of all the properties used:
    - Which have the least browser support?
    - Do the problem properties interact? If so, what are the problem combinations?
3. If there are problem situations that can't be ignored, define a plan to fix the design.
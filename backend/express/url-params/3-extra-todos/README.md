# Complete Extra TODOs
Complete the extra TODO items listed in the comments of [_finished](../_finished):

## Render a [client-side `fetch` request](https://github.com/sait-wbdv/sample-code/blob/master/backend/express/url-params/_finished/views/pages/definition-list.ejs#L13)
The `pages/definition-list` view is incomplete and needs to display a list of definitions. 
1. To _only this page_ add a linked Javascript file in `public/js/client.js`.
2. In this file and using [this sample code](https://gist.github.com/acidtone/33304c82f8d22e9a330003b19a147303), send a `fetch` request to:
    - `https://json-express.herokuapp.com/api/v0/definitions`
3. Render the `json` response into a definition list and output to `.container`.

## Link [page-specific styles for `item` view](https://github.com/sait-wbdv/sample-code/blob/master/backend/express/url-params/_finished/views/pages/definition-item.ejs#L5)
The `pages/definition-item` view needs to display the single definition in a more readable way:
1. To _only this page_ add a linked CSS file in `public/css/definitions.css`.
2. Using this file:
    - Increase the `font-size` of the definition text.
    - Optional: Change the `font-variant` of the `dt` to `small-caps`.
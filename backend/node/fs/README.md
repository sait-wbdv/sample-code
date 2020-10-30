# File System Module
## Reading Files
- [Reading a file synchronously](1-read-sync.js) (not recommended)
- [Reading a file asynchronously using a callback](2-read-async.js)
- [Reading a file asynchronously using a Promise](3-read-async-promise.js)

### Activity: Send a file as a `http` response
1. Copy the [JSON starter code](../http/2-json-endpoint.js) from yesterday into a new project directory.
2. Copy [`definitions.json`](assets/definitions.json) into the same project directory.
3. Using one or more of the Read methods above, refactor the `http` server to read and send the JSON file as a HTTP response.

#### Level Up
1. Copy the [finished code](../http/static-endpoints/finished/server.js) from the [HTML endpoint activity](../http/static-endpoints) (or use code you wrote) into a new project directory.
2. Add a new JSON endpoint to the `http` server so that `definitions.json` is returned as a response when `GET /api/v0/definitions` is requested.
3. Bonus: while you're at it, refactor the HTML endpoints (Home, Contact, etc) so that they are returning HTML files read from the file system. Is there a way to use just one HTML file but still send custom page headings?

## Attributions
- [How To Read a File With Node.js](https://youtu.be/uvRwF1JFqt0) by Junior Developer Central
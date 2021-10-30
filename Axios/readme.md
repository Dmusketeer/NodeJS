# ------------------------------------ Axios ------------------------------------

- Axios is a promise based HTTP client for the browser and Node.js.
-  Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. 
-  It can be used in plain JavaScript or with a library such as Vue or React.

##  Axios requests Object

- There are multiple methods for creating requests in axios.

- axios(config) 
- axios(url[, config])

These are basic methods for generating requests in axios.

- axios.request(config)
- axios.get(url[, config])
- axios.delete(url[, config])
- axios.head(url[, config])
- axios.options(url[, config])
- axios.post(url[, data[, config]])
- axios.put(url[, data[, config]])
- axios.patch(url[, data[, config]])


## Axios Response object
When we send a request to a server, it returns a response. The Axios response object consists of:

- data - the payload returned from the server
- status - the HTTP code returned from the server
- statusText - the HTTP status message returned by the server
- headers - headers sent by server
- config - the original request configuration
- request - the request object




## Axios status code
HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

- Informational responses (100–199)
- Successful responses (200–299)
- Redirects (300–399)
- Client errors (400–499)
- Server errors (500–599)
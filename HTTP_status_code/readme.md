# ---------------------------- HTTP Status Code ----------------------------

### What Are HTTP Status Codes?
- When a client makes a request to the server, server receives and processes the request, and then sends back the relevant resources along with an HTTP header.
- HTTP status codes are delivered to your browser in the HTTP header. While status codes are returned every single time your browser requests a web page or resource, most of the time you don’t see them.

HTTP status codes are divided into 5 “classes”. These are groupings of responses that have similar or related meanings.

The five classes include:

- 100s: <b>Informational codes</b> indicating that the request initiated by the browser is continuing.
- 200s: <b>Success codes</b> returned when browser request was received, understood, and processed by the server.
- 300s: <b>Redirection codes</b> returned when a new resource has been substituted for the requested resource.
- 400s: <b>Client error </b> codes indicating that there was a problem with the request.
- 500s: <b>Server error </b> codes indicating that the request was accepted, but that an error on the server prevented the fulfillment of the request.



## 200 : OK 
One of the mostly widely used HTTP status codes, status code 200 OK is used to indicate that a request was received, processed, and was successful.

## 201: Created
A 201 Created status code is like a 200 OK status code.A 201 status code is typically used for PUT requests.when a PUT request is used, a new resource is created on the URL specified in the request. 

## 204: No Content
A status code of 204 No Content indicates that the response has been successfully delivered by the server and fulfilled and no further content is to be sent in the body of the response.

## 304: Not Modified
A status code of 304 Not Modified is sent in response to a conditional GET or HEAD request.

## 400: Bad Request
The server cannot process the request due to an issue from the client. This could be due to any number of reasons, such as a file being too large, bad syntax, an invalid URL, or some other issue caused by a third-party application

## 401: Unauthorized
A 401 Unauthorized error status code indicates that the request does not include the appropriate authentication credentials, authentication has failed, or the user must log in

## 403: Forbidden
The 403 Forbidden error status code indicates that the request from the client was understood, but the server will not authorize it, so the client cannot access it.

## 404: Not Found
One of the most common and infamous status codes encountered by users and developers, the 404 Not Found error status code indicates that the resource required from the server does not exist or is not willing to provide it to the client.

## 409: Conflict
A 409 Conflict error status code indicates that the request from the client could not be processed due to a conflict with the server.

## 500: Internal Server Error
The 500 Internal Server Error status code simply means that the server encountered an issue and cannot process the request.

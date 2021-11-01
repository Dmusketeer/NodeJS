# ------------------------------ WebSockets ------------------------------
## Secured WebSockets

Always use the secure, encrypted protocol for WebSockets, wss:// .
ws:// refers to the unsafe WebSockets version (the http:// of WebSockets), and should be
avoided for obvious reasons.

HTTP is a request/response protocol: the server returns some data when the client requests it. <br/>
With WebSockets:
- the server can send a message to the client without the client explicitly requesting
something
- the client and the server can talk to each other simultaneously
very little data overhead needs to be exchanged to send messages. This means a low
latency communication.
- WebSockets are great for real-time and long-lived communications.
- HTTP is great for occasional data exchange and interactions initiated by the client.
- HTTP is much simpler to implement, while WebSockets require a bit more overhead.

## Secured WebSockets
- Always use the secure, encrypted protocol for WebSockets, `wss:// .`
`ws://` refers to the unsafe WebSockets version (the http:// of WebSockets), and should be
avoided for obvious reasons.

## [Implement a WebSockets server in Node.js](./wss.js)
 
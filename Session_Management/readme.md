## -:- Session Management in Node.js using ExpressJS and Express Session -:-


<b> A website is based on the HTTP protocol. HTTP is a stateless protocol which means at the end of every request and response cycle, the client and the server forget about each other.</b>

This is where the session comes in. A session will contain some unique data about that client to allow the server to keep track of the user’s state. In session-based authentication, the user’s state is stored in the server’s memory or a database.


## How sessions works
- When the client makes a login request to the server, the server will create a session and store it on the server-side. When the server responds to the client, it sends a cookie. This cookie will contain the session’s unique id stored on the server, which will now be stored on the client. This cookie will be sent on every request to the server.

- We use this session ID and look up the session saved in the database or the session store to maintain a one-to-one match between a session and a cookie. This will make HTTP protocol connections stateful.

## The difference between session and cookie
- As you might have noticed, we’ve introduced a new concept called a cookie. We need to answer the question of what is the difference between a session and a cookie.

- A cookie is a key-value pair that is stored in the browser. The browser attaches cookies to every HTTP request that is sent to the server.

- In a cookie, you can’t store a lot of data. A cookie cannot store any sort of user credentials or secret information. If we did that, a hacker could easily get hold of that information and steal personal data for malicious activities.

- On the other hand, the session data is stored on the server-side, i.e., a database or a session store. Hence, it can accommodate larger amounts of data. To access data from the server-side, a session is authenticated with a secret key or a session id that we get from the cookie on every request.
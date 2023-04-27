// In your own terms, define the following terms:

// What is HTTP?
HTTP is a standardized way for servers to communicate, where a browser will send a request to a server, the server will communicate with any other servers or databases required, and then the server will provide a response back to our browser with HTML and any other content

// What is a URL?
A URL is a structure of information for the server to read, providing the protocol, hostname, port, resource, and query.

// What is DNS?
DNS is the domain name FileSystem, which is an option where if the hostname is unable to be matched up with an IP address, the DNS will resolve the hostname into an IP for us or give us an error that it cannot be found. It acts as a phonebook for the web.

// What is a query string?
A query string is located at the end of a URL, and it is any extra parameters of information that we wish to use to search something on the page that we are on. 

// What are two HTTP verbs and how are they different?
GET and POST are two HTTP verbs. GET is when you want to get information from the server without changing any data (ie. searching up cat on reddit), while POST is a request you use to modify some sort of server data (ie. writing a comment on someones post)

// What is an HTTP request?
It is a request for information from the user to the server using HTTP protocol

// What is an HTTP response?
It is a response from the server to the user using the HTTP protocol. 

// What is an HTTP header? Give a couple examples of request and response headers you have seen.
Headers provide information about a request or response, like cache-control, cookie, set-cookie

// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
The browser resolves the hostname into an IP address, makes a request to that IP address, the server sends a response, with that response the browser will produce a viewable page making more requests for things like images. 
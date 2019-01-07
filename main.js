// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("<html><body><center> <h2>How Not to Center with HTML</h2> <p>This text may be centered...but you would be better off using CSS to center text or other elements on a web page.</p></center></body></html>");
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listening at http://127.0.0.1:8000/");

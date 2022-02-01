var http = require('http');
var port = 8080;

var server = http.createServer(function(req, res) {
  const url = req.url;
  if (url == "/about") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Welcome to about us page</h1>');
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Welcome to contact us page</h1>');
    res.end();
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World!</h1>');
    res.end();
  }
  
});

server.listen(port, function() {
  console.log('Server working at http://localhost:' + port);
});
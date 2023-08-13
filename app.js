const http = require('http');

const finalhandler = require('finalhandler');
const serveStatic = require('serve-static');

var serve = serveStatic("./");

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(process.env.PORT || 8080)
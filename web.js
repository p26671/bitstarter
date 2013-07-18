var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var bfr = fs.readFileSync("index.html");
var data = bfr.toString("utf8", 0, bfr.length);

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});


var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs'); // Seems to me that there's no need to declare a variable here

var buf = new Buffer(32);

app.get('/', function(request, response) {
  buf = fs.readFileSync("index.html");
  response.send(buf.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

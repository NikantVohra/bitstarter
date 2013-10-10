var fs = require('fs');
var express = require('express');
var buf = require('buffer');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
 var contents_buffer = fs.readFileSync("index.html");
 var contents = contents_buffer.toString();
 response.send(contents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

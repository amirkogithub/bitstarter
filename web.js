var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World from index.html');
  var param = fs.readFileSync('./index.html','utf8');
  response.send(txt.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

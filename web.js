var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffer;
var string

app.get('/', function(request, response) {
  //response.send('Hello World2!');
	buffer = fs.readFileSync('./index.html');
	string = buffer.toString('utf-8');
	response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

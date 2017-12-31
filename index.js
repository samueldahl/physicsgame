var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile('index.html', {root: __dirname});
});

server.listen(process.env.PORT || 8080);

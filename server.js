var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3004;

var app = express();

app.use(morgan('common'));
app.use(bodyParser.json());

app.all('/dishes', function (req, res, next) {
	res.writeHead(200, {'Content-type': 'text/html'});
	next();
});

app.get('/dishes', function (req, res) {
	res.end('Get all the dishes');
});

app.post('/dishes', function (req, res) {
	res.end('Will add the dish: '+ req.body.name + '\nwith details : ' + req.body.description);
});

app.delete('/dishes', function (req, res) {
	res.end('Delete all Dishes');
});

app.get('/dishes/:dishId', function (req, res) {
	res.end('Will send the details of dish : ' + req.params.dishId + ' to you!');
});

app.put('/dishes/:dishId', function (req, res) {
	res.write('Updating the dish having id : '+ req.params.dishId + '\n');
	res.end('Will update the Dish : '+ req.body.name + '\nwith description: ' + req.body.description);
});

app.delete('/dishes/:dishId', function (req, res) {
	res.end('Deleting dish having id : ' + req.params.dishId);
});

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function () {
	console.log(`Server is listening on http://${hostname}:${port}/`);
});

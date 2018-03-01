
var path = require('path');
//a way to bring data from here into other files
module.exports = function (app) {
	
	//based on users url need to get them to other pages
	//how to send a file using express and node
	app.get('/tables', function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/tables.html'));
	});

	app.get('/reserve', function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/reserve.html'));
	});
//if you are using app and go to any other url other than reserve or table you go to home page
	app.use( function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/home.html'));
	});
}
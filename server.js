var express = require('express');
//express provides easy routing via node.js
var app = express();
//this path is built into node itself
var path = require('path');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
 
//body parser allows us to recieve our information back in json form so it is easy to manipulate 
// provides easy routing via node.js
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

//this requires the routing of the html-routes.js to assist with finding the files and locations on the browser
//want to call api first as that is where the data is coming from that will be displayed in the html pages
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);
 
app.listen(PORT, function(){
	console.log("App is listening on PORT: " + PORT);
});
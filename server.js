//requiring needed NPM packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;


// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json 
app.use(bodyParser.json())

//requiring the apiRoutes file
require('./app/routing/apiRoutes.js')(app); 

//requiring the htmlRoutes file
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function() {
	console.log("App listening on Port: ", PORT);

});
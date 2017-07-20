



var express 	= require("express");
var app 		= express();
var bodyParser 	= require("body-parser");
var Bear = require('./models/Bear');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to the database

// ROUTES FOR THE API
var router = express.Router(); // get an instance of the express Router

// Route Middleware
route.use(function(req, res, next){
	console.log('Something is happening');
	next();
}); 

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' }); 

});


// REGISTER THE ROUTES
app.use('/api', router);


// START THE SERVER
app.listen(port);
console.log('magic happens on port ' + port);


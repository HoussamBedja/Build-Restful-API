



var express 	= require("express");
var app 		= express();
var bodyParser 	= require("body-parser");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to the database

var router = express.Router();


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' }); 

});


app.use('/api', router);

app.listen(port);

console.log('magic happens on port ' + port);


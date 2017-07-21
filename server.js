



var express 	= require("express");
var app 		= express();
var bodyParser 	= require("body-parser");
var Bear = require('./models/Bear');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database

// ROUTES FOR THE API
var router = express.Router(); // get an instance of the express Router

// Route Middleware
router.use(function(req, res, next){
	console.log('Something is happening');
	next();
}); 

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' }); 

});

router.route('/bears')
	.post(function(req, res){
		var bear = new Bear();
		bear.name = req.body.name;

		bear.save(function(err){
			if (err) {
				res.send(err);
			}
			res.json({ message: 'Bear created!' }); 
		});
	})
	//Get all the bears
	.get(function(req, res) {
        Bear.find(function(err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });
    });


router.route('/bears/:bear_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    });


// REGISTER THE ROUTES
app.use('/api', router);


// START THE SERVER
app.listen(port);
console.log('magic happens on port ' + port);


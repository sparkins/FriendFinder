var express = require('express');
var bodyParser = require('body-parser')

var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


var path = require('path');

var mysql = require('mysql');


app.use(express.static("public"));


require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);
// require('./app/data/friends')(app);

app.listen(3000, function(){
	console.log('listening on 3000');
});
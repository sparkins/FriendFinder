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



// // Initializes the connection variable to sync with a MySQL database
// var connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "password",
//   database: "friendfinder"
// });

app.listen(3000, function(){
	console.log('listening on 3000');
});
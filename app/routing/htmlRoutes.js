var express = require('express');
var app = express();

var mysql = require('mysql');

app.use(express.static("public"));

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "stu_db"
});

app.get('/', function(req, res){
	res.send('hi');
});

app.get('/survey', function(req, res){
	connection.query('SELECT * FROM students', function (error, results, fields) {
	  if (error) throw error;
      
	  res.json(results);
	});
});

app.get('/students/:id', function(req, res){
	connection.query('SELECT * FROM students WHERE id = ?', [req.params.id],function (error, results, fields) {
	  if (error) throw error;
	  
	  res.json(results[0]);
	});
});

app.get('/students-new', function(req, res){

	// res.json(req.query);
	connection.query('INSERT INTO students (name) VALUES (?)', [req.query.student_name],function (error, results, fields) {
	  if (error) throw error;
	  
	  res.redirect('/');
	});
});

app.get('/students-delete/:student_id', function(req, res){
	connection.query('DELETE FROM students WHERE id = ?', [req.params.student_id],function (error, results, fields) {
	  if (error) throw error;
	  
	  res.redirect('/');
	  // res.send(req.params.student_id + ' was deleted');
	});
});


app.listen(3001, function(){
	console.log('listening on 3001');
});

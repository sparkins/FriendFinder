// Require external libraries
var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "friendfinder"
});

// Connecting apiRoutes to server.js, making sure routes are available when server.js is running
module.exports = function (app) {

  // Global Variables
  var friendsDifference = [];
  var friendsArray = [];
  var matchIndex;
  var myScoresArr = [];

  // get route for /friends - display all friends to the browser
  app.get('/friends', function (req, res) {
    connection.query('SELECT * FROM friends', function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
  });

  // Post route for /friends - Check your survey results vs friends in DB, suggest a best friend and then submit your results to mysql db
  app.post('/friends', function (req, res) {
    connection.query('SELECT * FROM friends', function (error, results, fields) {
      if (error) throw error;
      // Create an array of scores for the user, to be compared later.
      myScoresArr.push(req.body.q1);
      myScoresArr.push(req.body.q2);
      myScoresArr.push(req.body.q3);
      myScoresArr.push(req.body.q4);
      myScoresArr.push(req.body.q5);
      myScoresArr.push(req.body.q6);
      myScoresArr.push(req.body.q7);
      myScoresArr.push(req.body.q8);
      myScoresArr.push(req.body.q9);
      myScoresArr.push(req.body.q10);
      console.log("MyScoresArray: " + myScoresArr)

      // For each friend in the DB, run the function findTheDifference
      for (var i = 0; i < results.length; i++) {
        findTheDifference(i, results, myScoresArr);
      }

      // Find out which is the lowest score (a.k.a your best match)
      var closestMatch = parseInt(Math.min.apply(null, friendsDifference));
      console.log(closestMatch);
      
      // Get the index of the friend with the lowest differencial
      matchIndex = friendsDifference.indexOf(closestMatch);
      
      // Grab the name of your new best friend
      var yourBestFriend = results[matchIndex].name;
      console.log("You Should meet: " + yourBestFriend);
      

    });

    // Function that creates a new array of scores for the db friend and then compares the results against the current user.
    function findTheDifference(count, results, myScoresArr) {
      // console.log("Query Results: ",results);
      // console.log(results[count])
      var name = results[count].name;
      var yourScores = [];
      var difference = 0;

      // Create an array of scores for the current db friend being evaluated.
      // yourScores.push(name);
      yourScores.push(results[count].Q1);
      yourScores.push(results[count].Q2);
      yourScores.push(results[count].Q3);
      yourScores.push(results[count].Q4);
      yourScores.push(results[count].Q5);
      yourScores.push(results[count].Q6);
      yourScores.push(results[count].Q7);
      yourScores.push(results[count].Q8);
      yourScores.push(results[count].Q9);
      yourScores.push(results[count].Q10);

      // Checks each question result and sum's the difference of each (using absolute numbers).
      for (var i = 0; i < myScoresArr.length; i++) {
        difference += Math.abs(myScoresArr[i] - yourScores[i]);
      }

      // Pushes the total difference to a new array friendsDifference
      // console.log("Final Difference= " + difference);
      console.log(name, yourScores)
      friendsDifference.push(difference);
      return (friendsDifference);
    }

    // Finally a mysql connection to submit your results to the friends db
    connection.query('INSERT INTO friends (name, photoLink, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [req.body.name, req.body.photoLink, parseInt(req.body.q1), parseInt(req.body.q2), parseInt(req.body.q3), 
        parseInt(req.body.q4), parseInt(req.body.q5), parseInt(req.body.q6), parseInt(req.body.q7), parseInt(req.body.q8), 
        parseInt(req.body.q9), parseInt(req.body.q10)], function (error, results, fields) {
        if (error) throw error;
        res.send("New Survey For: " + req.body.name + " was submitted");
      });
  });
}
var express = require('express');
var app = express();

var path = require('path');

var mysql = require('mysql');

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

module.exports = function (app) {

  var friendsDifference = [];
  var friendsArray = [];
  var matchIndex;
  var myScoresArr = [];
  // Initializes the connection variable to sync with a MySQL database


  app.get('/friends', function (req, res) {
    connection.query('SELECT * FROM friends', function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
  });

  app.post('/friends', function (req, res) {
    connection.query('SELECT * FROM friends', function (error, results, fields) {
      if (error) throw error;
      myScoresArr.push(req.body.q1);
      myScoresArr.push(req.body.q2);
      myScoresArr.push(req.body.q3);
      console.log("MyScoresArray: " + myScoresArr)

      for (var i = 0; i < results.length; i++) {
        findTheDifference(i, results, myScoresArr);
      }
      var closestMatch = parseInt(Math.min.apply(null, friendsDifference));
      console.log(closestMatch);
      matchIndex = friendsDifference.indexOf(closestMatch);
      var yourBestFriend = results[matchIndex].name;
      console.log("You Should meet: " + yourBestFriend);
    });

    function findTheDifference(count, results, myScoresArr) {
      // console.log("Query Results: ",results);
      // console.log(results[count])
      var name = results[count].name;
      var yourScores = [];
      var difference = 0;
      // yourScores.push(name);
      yourScores.push(results[count].Q1);
      yourScores.push(results[count].Q2);
      yourScores.push(results[count].Q3);
      // yourScores.push(friendsArray[count].q4);
      // yourScores.push(friendsArray[count].q5);

      for (var i = 0; i < myScoresArr.length; i++) {
        difference += Math.abs(myScoresArr[i] - yourScores[i]);
      }

      console.log("Final Difference= " + difference);
      console.log(name, yourScores)
      friendsDifference.push(difference);
      return (friendsDifference);
    }

    // function findBestFriend(element) {
    // return element = closestMatch;
    // }

    // console.log(array1.findIndex(findFirstLargeNumber));

    connection.query('INSERT INTO friends (name, Q1, Q2, Q3) VALUES (?, ?, ?, ?)',
      [req.body.name, parseInt(req.body.q1), parseInt(req.body.q2), parseInt(req.body.q3)], function (error, results, fields) {
        if (error) throw error;
        res.send("New Survey For: " + req.body.name + " was submitted");
      });
  });
}
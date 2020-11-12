const express = require("express");
const mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Chui@gt2020",
  database: "burger_db"});

  // Initiate MySQL Connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Routes
  app.get("/burgers", function(req, res) {
    connection.query("SELECT * FROM burgers ORDER BY id", function(err, result) {
      if (err) throw err;
      
      var html = "<h1>Burgers Ordered BY ID</h1>";
  
      html += "<ul>";
  
      for (var i = 0; i < result.length; i++) {
        html += "<li><p> ID: " + result[i].id + "</p>";
        html += "<p> Name: " + result[i].name + "</p>";
        html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
        html += "<p>Attitude: " + result[i].attitude + "</p></li>";
      }
  
      html += "</ul>";
  
      res.send(html);
    });
  });
  
  app.get("/burgers-chart", function(req, res) {
    connection.query("SELECT * FROM actors ORDER BY coolness_points DESC", function(err, result) {
      if (err) throw err;
  
      var html = "<h1>Burgers by Coolness</h1>";
  
      html += "<ul>";
  
      for (var i = 0; i < result.length; i++) {
        html += "<li><p> ID: " + result[i].id + "</p>";
        html += "<p> Name: " + result[i].name + "</p>";
        html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
        html += "<p>Attitude: " + result[i].attitude + "</p></li>";
      }
  
      html += "</ul>";
  
      res.send(html);
    });
  });
  
  app.get("/attitude-chart/:att", function(req, res) {
    connection.query("SELECT * FROM actors WHERE attitude = ?", [req.params.att], function(err, result) {
      if (err) throw err;
  
      var html = "<h1>Actors With an Attitude of " + req.params.att + "</h1>";
  
      html += "<ul>";
  
      for (var i = 0; i < result.length; i++) {
        html += "<li><p> ID: " + result[i].id + "</p>";
        html += "<p> Name: " + result[i].name + "</p>";
        html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
        html += "<p>Attitude: " + result[i].attitude + "</p></li>";
      }
  
      html += "</ul>";
  
      res.send(html);
    });
  });
  
  // Start our server so that it can begin listening to client requests.
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
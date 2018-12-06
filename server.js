/*
 * Sever side Js for Final Project due: 12/6/18
 *
 *
 * name: Team 42
 * github: https://github.com/OSU-CS290-F18/final-project-42
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var MongoClient = require('mongodb').MongoClient;
var userData = require("./userData");
var beavsta = "beavsta";
var cache = new Map();
var PORT = 3000

// DO NOT COMMIT WITH PASSWORD/USERNAME

// var mongoHost = process.env.MONGO_HOST;
// var mongoPort = process.env.MONGO_PORT || '27017';
// var mongoUsername = process.env.MONGO_USERNAME;
// var mongoPassword = process.env.MONGO_PASSWORD;
// var mongoDBName = process.env.MONGO_DB_NAME;
var mongoUsername = "cs290_kentann";
var mongoPassword = "cs290_kentann";
var mongoHost = "classmongo.engr.oregonstate.edu";
var mongoPort = "27017";
var mongoDBName = "cs290_kentann";

// var mongoURL = 'mongo://classmongo.engr.oregonstate.edu:27017/cs290_kentann'
var mongoURL = "mongodb://" +
  mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort +
  "/" + mongoDBName;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static("public"));
console.log(userData);
console.log(Object.prototype.toString.call(userData));

//Calls main page from handlesbars
app.get('/', function(req, res, next){
  res.status(200).render('main-page');
});

app.get('/user#', function(req, res, next){
  res.status(200).render('main-page');
});



app.get('/addPost', function(req, res, next){
  res.status(200).render('main-page');
});
app.get('/addLike', function(req, res, next){
  res.status(200).render('main-page');
});

app.get('/blow', function(req, res, next){
  res.status(200);
  mongoDB.collection(beavsta).drop(function(err, delOK) {
    if (delOK) console.log("It's gone BB");
    mongoDB.createCollection(beavsta, function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      mongoDB.collection(beavsta).insert(userData, function(err, records){
        if (err) throw err;
        console.log("Data inserted");
      });
    });
  });
});

app.get('*', function (req, res, next) {
  res.status(404).render('404');
});


MongoClient.connect(mongoURL, function (err, client) {
  if (err) {
    throw err;
  }
  mongoDB = client.db(mongoDBName);
  app.listen(PORT, function () {
    console.log("== Server listening on port", PORT);
  });
});

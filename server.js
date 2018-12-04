/*
 * Sever side Js for Final Project due :12/6/18
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
var cache = new Map();
var PORT = 3000


// var mongoHost = process.env.MONGO_HOST;
// var mongoPort = process.env.MONGO_PORT || '27017';
// var mongoUsername = process.env.MONGO_USERNAME;
// var mongoPassword = process.env.MONGO_PASSWORD;
// var mongoDBName = process.env.MONGO_DB_NAME;

var mongoURL = 'mongo://classmongo.engr.oregonstate.edu:27017/cs290_kentann'

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static("public"));

//Calls main page from handlesbars
app.get('/', function(req, res, next){
  rs.status(200).render('main-page');
});



MongoClient.connect(mongoURL, function (err, client) {
  if (err) {
    throw err;
  }
  mongoDB = client.db(mongo-db);
  app.listen(PORT, function () {
    console.log("== Server listening on port", PORT);
  });
});

// this will store the connection to mysql data

// This section details the items that are required
var mysql = require('mysql');
// var config = require('dotenv')
require('dotenv').config();

// connection to the DB
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'burgers_db'
})

// testing the connection
connection.connect(function(err){
  if(err)throw err;
  console.log("connected as id: " + connection.threadId);
});

module.exports = connection;

// this will store the connection to mysql data

// This section details the items that are required
var mysql = require('mysql');
// var config = require('dotenv')
require('dotenv').config();
var connection; 


// connection to the DB
if(process.env.JAWSDB_URL){
  connection=mysql.createConnection(process.env.JAWSDB_URL);
}else{  
connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'burgers_db'
});
};

// testing the connection
connection.connect(function(err){
  if(err)throw err;
  console.log("connected as id: " + connection.threadId);
});

module.exports = connection;

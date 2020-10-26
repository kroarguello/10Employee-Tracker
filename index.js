const askEmployee= require("./questions/askEmployee.js");

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,  // Your port; if not 3306
  user: "root", // Your username
  password: "Mishi*20",  // Your password
  database: "department_db" //Data Base 
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    askEmployee(connection);
  });
  
  
  
// setting up mySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: require("./password"),
    database: "burger_db"
  });

  // making connection
  connection.connect(function(err) {
      if (err) {
          console.error("connection error: " + err.stack);
          return;
      }
  });

  module.exports = connection;

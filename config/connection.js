// setting up mySQL connection
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: require("./password"),
    database: "burger_db"
  });
};
  // making connection
  connection.connect(function(err) {
      if (err) {
          console.error("connection error: " + err.stack);
          return;
      }
  });

  module.exports = connection;

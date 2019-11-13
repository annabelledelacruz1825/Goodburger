// Set up MySQL connection.
var mysql = require("mysql");

// database: "goodburger_db"
var connection;

if (process.env.JAWSDB_URL) {
  console.log("Using environment:", process.env.JAWSDB_URL);
  try {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } catch (error) {
    console.log(error);
  }
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "goodburger_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connection: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

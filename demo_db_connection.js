var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mariadb",
  user: "test",
  password: "test",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the MySQL server.");
});

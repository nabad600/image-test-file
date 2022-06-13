var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mariadb",
  user: "test",
  password: "test",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
connection.end();
process.exit(1);
console.log("Process exited successfully")

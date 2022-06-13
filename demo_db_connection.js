var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mariadb",
  user: "test",
  password: "test",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  process.exit(0);
  console.log("Connected!");
});


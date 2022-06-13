var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mariadb",
  user: "test",
  password: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mariadb",
  user: "test",
  password: "test"
  database: "test"
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

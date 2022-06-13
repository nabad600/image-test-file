var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mariadb",
  user: "test",
  password: "test",
  database: "test"
});

con.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected to the MySQL server.");
// });
con.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});

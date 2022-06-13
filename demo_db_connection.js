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
process.on('exit', function (0) {
   return console.log(`Process to exit with code`);
});

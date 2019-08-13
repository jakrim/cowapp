var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  database: 'Cowapp'
});

connection.connect(err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'cwsw'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  connection.connect();

  connection.query('SELECT * FROM user', function (error, results) {
    if (error) throw error;
    res.json(results)
  });
});

module.exports = router;

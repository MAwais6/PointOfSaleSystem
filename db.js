var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


connection.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});


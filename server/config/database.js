const util = require('util');
const mysql = require('mysql');
const pool = mysql.createPool({
	host     : 'localhost',
    user     : 'root',   
    password : '',  
    database : 'sql_login'  
});


module.exports = pool;
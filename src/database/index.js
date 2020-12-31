const mysql = require('mysql');
const dbConfig = require('./config');
const util = require('util');


var pool = mysql.createPool({
    connectionLimit: 10,
    host: dbConfig.host,
    user: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database_name,
    debug: false,
    insecureAuth: true
});

pool.query = util.promisify(pool.query);

module.exports = pool;



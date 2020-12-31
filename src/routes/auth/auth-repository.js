const pool = require('../../database/index');

async function login(user) {
    var query = "SELECT * FROM users WHERE name = ? AND password = ?";
    return pool.query(query, [user.username, user.password]);
}

module.exports = {
    login
}
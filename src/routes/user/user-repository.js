const pool = require('../../database/index');

async function createTable() {
    var query = "CREATE TABLE users (name VARCHAR(255), password VARCHAR(255))";
    return pool.query(query);
}
async function register(user) {
    var query = "INSERT INTO users (name, password) VALUES (?,?)";
    return pool.query(query, [user.username, user.password]);
}

async function updateUser(user) {
    var query = "UPDATE  users SET password = ? WHERE name = ? ";
    return pool.query(query, [user.password, user.username]);
}
async function deleteUser(user) {
    var query = "DELETE FROM users WHERE name = ? ";
    return pool.query(query, [user.username]);
}

module.exports = {
    createTable,
    register,
    updateUser,
    deleteUser
}
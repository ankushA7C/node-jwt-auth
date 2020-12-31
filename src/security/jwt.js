var jwt = require('jsonwebtoken');
const SECRET_KEY = "qazxswedcvfrtgb7612";
const EXPIRE_TIME = "1h"  // 60 * 60

function generateToken(user) {

    const userDetails = {
        username: user.username,
        password: user.password
    }
    const token = jwt.sign(userDetails, SECRET_KEY, { expiresIn: EXPIRE_TIME });
    return token;
}

function decodeToken(token) {
    var decodedToken = jwt.verify(token, SECRET_KEY);
    return decodedToken;
}

module.exports = {
    generateToken,
    decodeToken
}
const authRepository = require('./auth-repository');
const jwt = require('../../security/jwt')

async function login(req) {
    let user = {
        username: req.body.username,
        password: req.body.password,
    }

    return await authRepository.login(user).then(result => {
        let token = jwt.generateToken(user);
        return token;
    }).catch(error => {
        return error;
    });
}
async function verify(req) {
    let decode = jwt.decodeToken(req.body.token);
    return decode;
}

module.exports = {
    login,
    verify
}
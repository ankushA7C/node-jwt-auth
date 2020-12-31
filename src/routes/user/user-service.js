const userRepository = require('./user-repository');

async function createTable() {
    return await userRepository.createTable();
}

async function register(req) {
    let user = {
        username: req.body.username,
        password: req.body.password,
    }
    return await userRepository.register(user);

}

async function updateUser(req) {
    let user = {
        username: req.body.username,
        password: req.body.password,
    }

    return await userRepository.updateUser(user);


}
async function deleteUser(req) {
    let user = {
        username: req.body.username,
        password: req.body.password,
    }

    return await userRepository.deleteUser(user);

}

module.exports = {
    createTable,
    register,
    updateUser,
    deleteUser
}
const router = require('express').Router();
const userService = require('./user-service')

router.get("/create-table", create_table);
router.post("/register", register);
router.post("/update", updateUser);
router.post("/delete", deleteUser);


async function create_table(req, res, next) {
    await userService.createTable().then(result => res.send(result))
        .catch(error => res.status(404).send(error.sqlMessage));
}
async function register(req, res, next) {
    await userService.register(req).then(result => res.send(result))
        .catch(error => res.status(404).send(error.sqlMessage));
}
async function updateUser(req, res, next) {
    await userService.updateUser(req).then(result => res.send(result))
        .catch(error => res.status(404).send(error.sqlMessage));
}
async function deleteUser(req, res, next) {
    await userService.deleteUser(req).then(result => res.send(result))
        .catch(error => res.status(404).send(error.sqlMessage));
}

module.exports = router;
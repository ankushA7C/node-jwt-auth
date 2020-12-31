const router = require('express').Router();
const authService = require('./auth-service')

router.post("/login", login);
router.post("/verify", verify);
async function login(req, res, next) {
    await authService.login(req).then(result => res.send(result))
        .catch(error => res.status(404).send(error.sqlMessage));
}
async function verify(req, res, next) {
    await authService.verify(req).then(result => res.send(result))
        .catch(error => res.status(404).send(error.sqlMessage));
}
module.exports = router;
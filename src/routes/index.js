function setRoute(app) {
    app.use("/auth", require("./auth/auth-controller"));
    app.use("/user", require("./user/user-controller"));
};

module.exports = {
    setRoute
};
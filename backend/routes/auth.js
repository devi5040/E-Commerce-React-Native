const Router = require("express").Router();
const authController = require("../controllers/authController");

Router.post("/register", authController.createUser);
Router.post("/login", authController.loginUser);

module.exports = Router;

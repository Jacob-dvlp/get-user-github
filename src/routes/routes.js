const express = require('express');
const controllerUser = require("../controller/controller");
const routes = express.Router();

routes.get("/",controllerUser.getUserForGit);
module.exports = routes

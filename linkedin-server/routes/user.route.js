const { Router } = require("express");

const router = new Router();

const { getInfo } = require("../controllers/user.controller.js");

router.get("/user_info/:id", getInfo);

module.exports = router;

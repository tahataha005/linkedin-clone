const { Router } = require("express");

const router = new Router();

const { addJob } = require("../controllers/company.controller.js");

router.get("/job", addJob);

module.exports = router;

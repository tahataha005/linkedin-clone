const { Router } = require("express");

const router = new Router();

const { getInfo, editInfo } = require("../controllers/user.controller.js");

router.get("/:id", getInfo);
router.put("/", editInfo);

module.exports = router;

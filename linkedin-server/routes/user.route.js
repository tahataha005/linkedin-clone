const { Router } = require("express");

const router = new Router();

const { getInfo, editInfo } = require("../controllers/user.controller.js");
const authMiddleware = require("../middlewares/auth.middleware.js");

router.get("/:id", authMiddleware, getInfo);
router.put("/", authMiddleware, editInfo);

module.exports = router;

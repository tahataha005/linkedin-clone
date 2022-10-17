const { Router } = require("express");

const router = new Router();

const {
    getInfo,
    editInfo,
    addJob,
} = require("../controllers/user.controller.js");
const authMiddleware = require("../middlewares/auth.middleware.js");
const companyMiddleware = require("../middlewares/company.middleware.js");

router.get("/:id", authMiddleware, getInfo);
router.put("/", authMiddleware, editInfo);
router.post("/job", authMiddleware, companyMiddleware, addJob);

module.exports = router;

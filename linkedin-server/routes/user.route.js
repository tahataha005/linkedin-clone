const { Router } = require("express");

const router = new Router();

const {
    getInfo,
    editInfo,
    addJob,
    apply,
    addPost,
    getPosts,
} = require("../controllers/user.controller.js");

const authMiddleware = require("../middlewares/auth.middleware.js");
const companyMiddleware = require("../middlewares/company.middleware.js");
const userMiddleware = require("../middlewares/user.middleware.js");

router.get("/post", authMiddleware, getPosts);
router.get("/:id", authMiddleware, getInfo);
router.put("/", authMiddleware, editInfo);
router.post("/job", authMiddleware, companyMiddleware, addJob);
router.post("/apply", authMiddleware, userMiddleware, apply);
router.post("/post", authMiddleware, addPost);

module.exports = router;

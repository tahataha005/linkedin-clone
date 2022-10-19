const { Router } = require("express");

const router = new Router();

const {
    getInfo,
    editInfo,
    apply,
    addPost,
    getPosts,
    getJobs,
} = require("../controllers/user.controller.js");

router.get("/post", getPosts);
router.get("/:id", getInfo);
router.put("/", editInfo);
router.get("/job", getJobs);
router.post("/apply", apply);
router.post("/post", addPost);

module.exports = router;

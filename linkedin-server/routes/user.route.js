const { Router } = require("express");

const router = new Router();

const {
    getInfo,
    editInfo,
    apply,
    addPost,
    getPosts,
    getJobs,
    follow,
    getFollowing,
} = require("../controllers/user.controller.js");

router.get("/post", getPosts);
router.post("/post", addPost);
router.get("/follow/:id", getFollowing);
router.put("/", editInfo);
router.get("/job", getJobs);
router.post("/apply", apply);
router.post("/follow", follow);
router.get("/:id", getInfo);

module.exports = router;

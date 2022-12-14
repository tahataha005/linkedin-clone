const User = require("../models/user.model.js");
const Job = require("../models/job.model.js");
const Apply = require("../models/apply.model.js");
const Post = require("../models/post.model.js");
const Follow = require("../models/follow.model.js");
const { default: mongoose } = require("mongoose");

const getInfo = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const editInfo = async (req, res) => {
    const { id, ...data } = req.body;
    User.findByIdAndUpdate(id, data)
        .then(user => {
            res.json(user);
        })
        .catch(err => res.status(404).json({ message: err.message }));
};

const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find().populate("company_id");
        res.json(jobs);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const apply = async (req, res) => {
    const { user_id, job_id } = req.body;

    try {
        const apply = new Apply();

        apply.user_id = user_id;
        apply.job_id = job_id;

        await apply.save();
        res.json(apply);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const addPost = async (req, res) => {
    const { content, user_id } = req.body;

    try {
        const post = new Post();

        post.content = content;
        post.user_id = user_id;

        await post.save();
        res.json(post);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("user_id");
        res.json(posts);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const follow = async (req, res) => {
    const { user_id, company_id } = req.body;

    try {
        const follow = new Follow();

        follow.user_id = user_id;
        follow.company_id = company_id;

        await follow.save();
        res.json(follow);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getFollowing = async (req, res) => {
    const { id } = req.params;

    try {
        const following = await Follow.find({ user_id: id }).populate(
            "company_id"
        );

        res.json(following);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getInfo,
    editInfo,
    apply,
    addPost,
    getPosts,
    getJobs,
    follow,
    getFollowing,
};

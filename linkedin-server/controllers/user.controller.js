const User = require("../models/user.model.js");
const Job = require("../models/job.model.js");
const Apply = require("../models/apply.model.js");
const Post = require("../models/post.model.js");
const { default: mongoose } = require("mongoose");

const getInfo = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.json({ user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const editInfo = async (req, res) => {
    const { id, ...data } = req.body;
    User.findByIdAndUpdate(id, data)
        .then(user => {
            res.json({ user });
        })
        .catch(err => res.status(404).json({ message: err.message }));
};

const addJob = async (req, res) => {
    const { company_id, name, description, work } = req.body;

    try {
        const job = new Job();

        job.name = name;
        job.description = description;
        job.work = work;
        job.company_id = company_id;

        await job.save();
        res.json(job);
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

module.exports = { addJob, getInfo, editInfo, apply, addPost };

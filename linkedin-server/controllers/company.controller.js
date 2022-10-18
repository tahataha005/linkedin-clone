const mongoose = require("mongoose");
const User = require("../models/user.model.js");
const Post = require("../models/post.model.js");
const Job = require("../models/job.model.js");
const Apply = require("../models/apply.model.js");

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

module.exports = { addJob };

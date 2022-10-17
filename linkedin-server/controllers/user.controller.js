const User = require("../models/user.model.js");
const Job = require("../models/job.model.js");

const getInfo = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json({ user });
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
    const job = new Job();

    try {
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

module.exports = { addJob, getInfo, editInfo };

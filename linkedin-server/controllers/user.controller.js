const User = require("../models/user.model.js");

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

module.exports = { getInfo, editInfo };

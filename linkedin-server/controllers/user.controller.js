const User = require("../models/user.model.js");

const getInfo = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json({ user });
};

module.exports = { getInfo };

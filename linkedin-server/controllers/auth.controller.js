const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");

const login = (req, res) => {
    res.send("login");
};

const signup = async (req, res) => {
    const { name, email, password, user_type, location, field } = req.body;
    try {
        const user = new User();

        user.name = name;
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        user.user_type = user_type;
        user.location = location;
        user.field = field;

        await user.save();
        res.json({ message: "success", id: user.id });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

module.exports = { login, signup };

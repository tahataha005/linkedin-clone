const User = require("../models/user.model.js");

const login = (req, res) => {
    res.send("login");
};

const signup = (req, res) => {
    const { name, email, password, user_type, location, feild } = req.body;
    const user = new User();

    user.name = name;
    user.email = email;
    user.password = password;
    user.user_type = user_type;
    user.location = location;
    user.feild = feild;

    user.save();
    res.json({ user: user });
};

module.exports = { login, signup };

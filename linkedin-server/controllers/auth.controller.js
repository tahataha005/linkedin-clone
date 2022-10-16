const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).send("Invalid credentials");
    }

    const passMatch = bcrypt.compare(password, user.password);

    if (!passMatch) {
        return res.status(404).send("Invalid credentials");
    }

    const token = jwt.sign(
        { name: user.name, email: user.email },
        process.env.SECRET_KEY
    );
    res.json({ user, token });
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

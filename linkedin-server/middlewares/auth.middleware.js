const User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({ email: decoded.email });
        res.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: err.message });
    }
};

module.exports = authMiddleware;

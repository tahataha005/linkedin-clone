const { json } = require("express");

const companyMiddleware = async (req, res, next) => {
    try {
        if (req.user.user_type.id === "634c79ea0432f5d4f9a72769") {
            next();
        } else {
            return res.status(401).json({ message: "Unauthorized" });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = companyMiddleware;

const userMiddleware = async (req, res, next) => {
    if (req.user.user_type === "1") {
        next();
    } else {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = userMiddleware;

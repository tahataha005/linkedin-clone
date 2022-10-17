const userMiddleware = async (req, res, next) => {
    if (req.user.user_type === process.env.TYPE_USER_ID) {
        next();
    } else {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = userMiddleware;

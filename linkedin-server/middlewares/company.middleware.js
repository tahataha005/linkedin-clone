const companyMiddleware = async (req, res, next) => {
    if (req.user.user_type === "2") {
        next();
    } else {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = companyMiddleware;

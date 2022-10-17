const companyMiddleware = async (req, res, next) => {
    if (req.user.user_type == process.env.TYPE_COMPANY_ID) {
        next();
    } else {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = companyMiddleware;

const express = require("express");
require("dotenv").config();
require("./config/db.config.js");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const authMiddleware = require("./middlewares/auth.middleware.js");
const companyMiddleware = require("./middlewares/company.middleware.js");
const userMiddleware = require("./middlewares/user.middleware.js");

const authRoutes = require("./routes/auth.route.js");
app.use("/auth", authRoutes);

const userRoutes = require("./routes/user.route.js");
app.use("/user", authMiddleware, userMiddleware, userRoutes);

const companyRoutes = require("./routes/company.route.js");
app.use("/company", authMiddleware, companyMiddleware, companyRoutes);

app.listen(process.env.PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on port ${process.env.PORT}`);
    }
});

const express = require("express");
require("dotenv").config();
require("./config/db.config.js");

const app = express();
app.use(express.json());

const authRoutes = require("./routes/auth.route.js");
app.use("/auth", authRoutes);

app.listen(process.env.PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on port ${process.env.PORT}`);
    }
});

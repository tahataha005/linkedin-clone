const express = require("express");
const app = express();

require("dotenv").config();

app.listen(process.env.PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on port ${process.env.PORT}`);
    }
});

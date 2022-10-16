const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: "username is required",
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: "password is required",
        unique: true,
        trim: true,
    },
    location: {
        type: String,
    },
    feild: {
        type: String,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

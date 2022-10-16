const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: "email is required",
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: "password is required",
        trim: true,
    },
    user_type: {
        type: String,
        required: "user_type is required",
    },
    location: {
        type: String,
    },
    field: {
        type: String,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

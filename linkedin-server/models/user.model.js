const mongoose = require("mongoose");
const UserType = require("./user.type.model.js");

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
        select: false,
    },
    user_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserType",
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

const mongoose = require("mongoose");
const user_typeSchema = mongoose.Schema({});

const UserType = mongoose.model("UserType", user_typeSchema);

module.exports = UserType;

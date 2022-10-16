const mongoose = require("mongoose");
const user_typeSchema = mongoose.Schema({
    user_type: {
        type: String,
        enum: ["user", "company"],
        required: true,
    },
});

const UserType = mongoose.model("UserType", user_typeSchema);

module.exports = UserType;

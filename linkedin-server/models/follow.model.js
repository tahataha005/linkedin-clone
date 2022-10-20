const mongoose = require("mongoose");

const followSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    company_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

const Follow = mongoose.model("Follow", followSchema);

module.exports = Follow;

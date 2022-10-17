const mongoose = require("mongoose");

const applySchema = mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    job_id: {
        type: mongoose.Types.ObjectId,
        ref: "Job",
        required: true,
    },
});

const Apply = mongoose.model("Apply", applySchema);

module.exports = Apply;

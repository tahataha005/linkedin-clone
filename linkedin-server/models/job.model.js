const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    work: {
        type: Array,
    },
    company_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;

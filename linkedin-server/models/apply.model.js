const mongoose = require("mongoose");

const Apply = mongoose.model("Apply", applySchema);

module.exports = Apply;

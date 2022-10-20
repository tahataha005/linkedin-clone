const mongoose = require("mongoose");

const Follow = mongoose.model("Follow", followSchema);

module.exports = Follow;

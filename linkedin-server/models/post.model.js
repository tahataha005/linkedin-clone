const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    content: {
        type: String,
        trim: true,
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

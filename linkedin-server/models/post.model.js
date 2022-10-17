const mongoose = requie("mongoose");

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

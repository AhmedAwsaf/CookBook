const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  likeCount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", categorySchema);
module.exports = Post;

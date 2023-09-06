const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    profileAvatar: { type: String, required: true },
    comment: { type: String },
  },
  {
    timestamps: true,
  }
);

const postSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    profileAvatar: { type: String, required: true },
    content: { type: String },
    likes: {
      likeCount: {
        type: Number,
        default: 0,
      },
      dislikedBy: [
        {
          firstName: { type: String, required: true },
          lastName: { type: String, required: true },
          email: { type: String, required: true },
          username: { type: String, required: true },
          profileAvatar: { type: String, required: true },
        },
      ],
      likedBy: [
        {
          firstName: { type: String, required: true },
          lastName: { type: String, required: true },
          email: { type: String, required: true },
          username: { type: String, required: true },
          profileAvatar: { type: String, required: true },
        },
      ],
    },
    media: { type: String },
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

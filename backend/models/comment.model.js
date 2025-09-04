import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    likes: { type: Array, default: [] },
    numberOfLikes: { type: Number, default: 0 },

    // ✅ add this inside the schema object
    replies: [
      {
        content: { type: String, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        createdAt: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema(
  {
    text: {
      type: String,
      unique: false,
      required: true,
    },
    date: {
      type: Date,
      unique: false,
      required: true,
    },
    studentId: {
      type: String,
      unique: false,
      required: true,
    }
  }
);
 
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;

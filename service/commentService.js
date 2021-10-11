const Comment = require('../model/comment');

exports.findAll = async function() {
    const commentList = await Comment.find();
    return commentList;
}

exports.save = async function(commentBody) {
    const comment = new Comment({
        text: commentBody.text,
        date: commentBody.date,
        studentId: commentBody.studentId
    });
    await comment.save();
    return comment;
}

exports.findById = async function(commentId) {
    const commentById = await Comment.findById(commentId);
    return commentById;
}

exports.deleteOne = async function(deletedId){
    await Comment.deleteOne({
        _id:deletedId
    });
}

exports.update = async function(updatedId, updatedBody) {
    const updatedComment= await Comment.findById(updatedId);
    updatedComment.text = updatedBody.text;
    updatedComment.date = updatedBody.date;
    updatedComment.studentId = updatedBody.studentId;
    await updatedComment.save();
    return updatedComment;
}
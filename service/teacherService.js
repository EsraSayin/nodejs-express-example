const Teacher = require('../model/teacher');

exports.findAll = async function() {
    const teacherList = await Teacher.find();
    return teacherList;
}

exports.save = async function(teacherBody) {
    const teacher = new Teacher({
        name: teacherBody.name,
        surname: teacherBody.surname,
        idCardNumber: teacherBody.idCardNumber,
        birthDate: teacherBody.birthDate
    });
    await teacher.save();
    return teacher;
}

exports.findById = async function(teacherId) {
    const teacherById = await Teacher.findById(teacherId);
    return teacherById;
}

exports.deleteOne = async function (deletedId) {
    await Teacher.deleteOne({
        _id: deletedId
    });
}

exports.update = async function (updatedId, updatedBody) {
    const updatedTeacher = await Teacher.findById(updatedId);
    updatedTeacher.name = updatedBody.name;
    updatedTeacher.surname = updatedBody.surname;
    updatedTeacher.idCardNumber = updatedBody.idCardNumber;
    updatedTeacher.birthDate = updatedBody.birthDate;
    await updatedTeacher.save();
    return updatedBody;
}
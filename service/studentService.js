const Student = require('../model/student');

exports.findAll = async function() {
    const studentList = await Student.find();
    return studentList;
}

exports.save = async function(studentBody) {
    const student = new Student({
        name: studentBody.name,
        surname: studentBody.surname,
        idCardNumber: studentBody.idCardNumber,
        birthDate: studentBody.birthDate
    });
    await student.save();
    return student;
}

exports.findById = async function(studentId) {
    const studentById = await Student.findById(studentId);
    return studentById;
}

exports.deleteOne = async function (deletedId) {
    await Student.deleteOne({
        _id: deletedId
    });
}

exports.update = async function (updatedId, updatedBody) {
    const updatedstudent = await Student.findById(updatedId);
    updatedstudent.name = updatedBody.name;
    updatedstudent.surname = updatedBody.surname;
    updatedstudent.idCardNumber = updatedBody.idCardNumber;
    updatedstudent.birthDate = updatedBody.birthDate;
    await updatedstudent.save();
    return updatedBody;
}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true,
    },
    surname: {
      type: String,
      unique: false,
      required: true,
    },
    idCardNumber: {
      type: String,
      unique: false,
      required: true,
    },
    birthDate: {
      type: Date,
      unique: false,
      required: false,
    },
  }
);
 
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
const request = require('supertest');
const app = require('../index');
const Teacher = require('../model/teacher');
const Student = require('../model/student');
const Comment = require('../model/comment');

beforeAll(async () => {
    await Teacher.deleteMany();
    await Student.deleteMany();
    await Comment.deleteMany();
});

describe('Teacher API tests', () => {

    let URL = "/teachers";

    let teacher =  {name: "John", surname: "Doe", idCardNumber: "11111111T", birthDate: "2018-10-10T00:00:00.000Z"};

    it('Get all teachers empty', (done) => {
        const expectedResponse = []
        request(app)
        .get(URL)
        .expect(200)
        .end((err, res) => {
            expect(res.body).toEqual(expectedResponse)
            done();
        })
    });

    it('Create a teacher', (done) => {
        request(app)
        .post(URL)
        .send(teacher)
        .expect(200)
        .end((err, res) => {
            teacher._id = res.body._id;
            teacher.__v = res.body.__v;
            expect(res.body).toEqual(teacher)
            done();
        })
    });

    it('Get all teachers not empty', (done) => {
        request(app)
        .get(URL)
        .expect(200)
        .end((err, res) => {
            expect(res.body[0]).toEqual(teacher)
            done();
        })
    });

    it('Get teacher by id', (done) => {
        request(app)
        .get(URL + '/' + teacher._id)
        .expect(200)
        .end((err, res) => {
            expect(res.body).toEqual(teacher)
            done();
        })
    });

    it('Update a teacher', (done) => {
        let updatedTeacher = teacher;
        updatedTeacher.name = "UpdatedName";
        const expectedResponse = {...teacher, ...updatedTeacher}
        request(app)
        .put(URL + '/' + teacher._id)
        .send(updatedTeacher)
        .expect(200)
        .end((err, res) => {
            expect(res.body).toEqual(expectedResponse)
            done();
        })
    });

    it('Delete teacher', (done) => {
        request(app)
        .delete(URL + '/' + teacher._id)
        .expect(204)
        .end((err, res) => {
            expect(res.body).toEqual({})
            done();
        })
    });

    it('Get all teachers empty after deletion', (done) => {
        const expectedResponse = []
        request(app)
        .get(URL)
        .expect(200)
        .end((err, res) => {
            expect(res.body).toEqual(expectedResponse)
            done();
        })
    });
});

describe('Student API tests', () => {

    URL = "/students";

    let student =  {name: "John", surname: "Doe", idCardNumber: "11111111T", birthDate: "2018-10-10T00:00:00.000Z"};

    it('Get all students empty', (done) => {
        const expectedResponse = []
        request(app)
        .get(URL)
        .expect(200)
        .end((err, res) => {
            expect(res.body).toEqual(expectedResponse)
            done();
        })
    });

    it('Create a student', (done) => {
        request(app)
        .post(URL)
        .send(student)
        .expect(200)
        .end((err, res) => {
            student._id = res.body._id;
            student.__v = res.body.__v;
            expect(res.body).toEqual(student)
            done();
        })
    });

    it('Get all students not empty', (done) => {
        request(app)
        .get(URL)
        .expect(200)
        .end((err, res) => {
            expect(res.body[0]).toEqual(student)
            done();
        })
    });

    it('Get student by id', (done) => {
        request(app)
        .get(URL + '/' + student._id)
        .expect(200)
        .end((err, res) => {
            expect(res.body).toEqual(student)
            done();
        })
    });

    it('Update a student', (done) => {
        let updatedStudent = student;
        updatedStudent.name = "UpdatedName";
        const expectedResponse = {...student, ...updatedStudent}
        request(app)
        .put(URL + '/' + student._id)
        .send(updatedStudent)
        .expect(200)
        .end((err, res) => {
            expect(res.body).toEqual(expectedResponse)
            done();
        })
    });

    it('Delete student', (done) => {
        request(app)
        .delete(URL + '/' + student._id)
        .expect(204)
        .end((err, res) => {
            expect(res.body).toEqual({})
            done();
        })
    });

    it('Get all students empty after deletion', (done) => {
        const expectedResponse = []
        request(app)
        .get(URL)
        .expect(200)
        .end((err, res) => {
            expect(res.body).toEqual(expectedResponse)
            done();
        })
    });
});

describe('Comment API tests', () => {

    let URL = "/comments";
 
     let comment =  {text: "Comment Text", date: "2021-10-10T00:00:00.000Z", studentId:"1"};
 
     it('Get all comments empty', (done) => {
         const expectedResponse = []
         request(app)
         .get(URL)
         .expect(200)
         .end((err, res) => {
             expect(res.body).toEqual(expectedResponse)
             done();
         })
     });
 
     it('Create a comment', (done) => {
         request(app)
         .post(URL)
         .send(comment)
         .expect(200)
         .end((err, res) => {
             comment._id = res.body._id;
             comment.__v = res.body.__v;
             expect(res.body).toEqual(comment)
             done();
         })
     });
 
     it('Get all comments not empty', (done) => {
         request(app)
         .get(URL)
         .expect(200)
         .end((err, res) => {
             expect(res.body[0]).toEqual(comment)
             done();
         })
     });
 
     it('Get comment by id', (done) => {
         request(app)
         .get(URL + '/' + comment._id)
         .expect(200)
         .end((err, res) => {
             expect(res.body).toEqual(comment)
             done();
         })
     });
 
     it('Update a comment', (done) => {
         let updatedComment = comment;
         updatedComment.text = "UpdatedText";
         const expectedResponse = {...comment, ...updatedComment}
         request(app)
         .put(URL + '/' + comment._id)
         .send(updatedComment)
         .expect(200)
         .end((err, res) => {
             expect(res.body).toEqual(expectedResponse)
             done();
         })
     });
     
     it('Delete comment', (done) => {
         request(app)
         .delete(URL + '/' + comment._id)
         .expect(204)
         .end((err, res) => {
             expect(res.body).toEqual({})
             done();
         })
     });
 
     it('Get all comments empty after deletion', (done) => {
         const expectedResponse = []
         request(app)
         .get(URL)
         .expect(200)
         .end((err, res) => {
             expect(res.body).toEqual(expectedResponse)
             done();
         })
     });
 });
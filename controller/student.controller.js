const Student = require("../models/mongooseSchemas/student.schema");

const createStudentsDB = async (root, args) => {
  const { input } = args;
  const newStudent = new Student(input);
  await newStudent.save();
  return newStudent;
};
const getStudentsDB = async (root, args) => {
  const { limit = 10, skip = 0 } = args;
  const getStudent = await Student.find({})
    .skip(parseInt(skip))
    .limit(parseInt(limit));
  return getStudent;
};
const getStudentDB = async (root, args) => {
  const { id } = args;
  const student = await Student.findById(id);
  return student;
};

module.exports = {
  createStudentsDB,
  getStudentDB,
  getStudentsDB,
};

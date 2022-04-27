const {
  getCouseDB,
  addStudentToCourseDB,
  getCoursesDB,
  createCourseDB,
  editCourseDB,
  deleteStudentToCourseDB,
} = require("../controller/course.controller");
const { createStudentsDB,
  getStudentDB,
  getStudentsDB,} = require("../controller/student.controller");

module.exports = {
  Query: {
    getCouses: getCoursesDB,
    getCouse: getCouseDB,
    getStudents: getStudentsDB,
    getStudent: getStudentDB,
  },
  Mutation: {
    createCourse: createCourseDB,
    createStudent: createStudentsDB,
    editCourse: editCourseDB,
    addStudentToCourse: addStudentToCourseDB,
    deleteStudentToCourse: deleteStudentToCourseDB,
  },
};

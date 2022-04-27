const Course = require("../models/mongooseSchemas/course.schema");
const Student = require("../models/mongooseSchemas/student.schema");
//TODO validar existencia de course y middleware para validar entradas

const getCouseDB = async (root, args) => {
  const { id } = args;
  const getCurse = await Course.findById(id);
  return getCurse;
};

const getCoursesDB = async (root, args) => {
  const { limit = 9, skip = 0 } = args;
  const getCourses = await Course.find({})
    .skip(parseInt(skip))
    .limit(parseInt(limit));
  return getCourses;
};

const createCourseDB = async (root, args) => {
  const {
    input: { title, description, topic, teacher },
  } = args;
  try {
    const course = new Course({
      title,
      description,
      teacher,
      topic,
      people: [],
    });
    await course.save();
    return course;
  } catch (error) {
    console.log(error);
  }
};

const editCourseDB = async (root, args) => {
  const {
    input: { _id, title, description, topic, teacher },
  } = args;
  const uppdate = await Course.findByIdAndUpdate(
    _id,
    {
      title,
      description,
      topic,
      teacher,
    },
    { new: true }
  );
  return uppdate;
};

const addStudentToCourseDB = async (root, args) => {
  const { courseID, studentID } = args;
  // TODO validar ID validos que existan
  //* code
  const studen = await Student.findById(studentID);
  // const uppdate = await Course.findById(courseID);
  // const transform = studen._id.toString().replace(/ObjectId\("(.*)"\)/, "$1");
  // uppdate.people.push({
  //   _id: transform,
  //   name: studen.name,
  // });
  // await uppdate.save();
  const uppdate = await Course.findOneAndUpdate(
    {
      _id: courseID,
    },
    {
      $push: {
        people: { _id: studentID, name: studen.name, email: studen.email },
      },
    }
  );

  return uppdate;
};

const deleteStudentToCourseDB = async (root, args) => {
  const { courseID, studentID } = args;
  // const studentE = await Student.findById(studentID);
  // const uppdate = await Course.findById(courseID);
  // uppdate.people.filter((student) => {
  //   console.log(student.id.toString().replace(/ObjectId\("(.*)"\)/, "$1"));
  //   console.log(studentID);
  //   return student.id !== studentID;
  // });
  const uppdate = await Course.findOneAndUpdate(
    {
      _id: courseID,
    },
    {
      $pull: {
        people: { _id: studentID },
      },
    }
  );
  return uppdate;
};

module.exports = {
  getCouseDB,
  addStudentToCourseDB,
  getCoursesDB,
  createCourseDB,
  editCourseDB,
  deleteStudentToCourseDB,
};

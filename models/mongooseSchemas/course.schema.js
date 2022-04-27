const { Schema, model } = require("mongoose");
const CourseSchema = Schema({
  title: {
    type: String,
    require: [true, "The title is required"],
    unique: true,
  },
  description: { type: String, require: [true, "The description is required"] },
  teacher: { type: String },
  topic: { type: String },
  people: { type: Array },
});

CourseSchema.methods.toJSON = function () {
  // lo que hace esta funcion es eliminar el pasword encriptado del req
  //   const { __v, password, _id, ...course } = this.toObject();
  const { __v, ...course } = this.toObject();
  return course;
};

// module.exports = {
//   course: model("Course", CourseSchema),
// };
module.exports = model("Course", CourseSchema);

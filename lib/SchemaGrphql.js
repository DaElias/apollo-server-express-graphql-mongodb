const { gql } = require("apollo-server");
module.exports = gql(`
type Course {
  _id: ID!
  title: String!
  description: String!
  teacher: String
  topic: String
  people:[StudentFind]
}
type Query {
    getCouses(skip: Int,limit: Int):[Course]
    getCouse(id: ID!): Course
    getStudents(skip: Int,limit: Int):[Student]
    getStudent(id: ID!): Student
}
type StudentFind {
  _id:  String!
  name: String
  email: String
}
type Student {
  _id: ID!
  name: String!
  email: String!
}

input courseInput{
  title: String!
  description: String!
  teacher: String
  topic: String
}
input studentInput{
  name: String!
  email: String!
}
input courseEditInput{
  _id: ID!
  title: String
  description: String
  teacher: String
  topic: String
}
type Mutation {
  "Create a course"
  createCourse(input: courseInput!): Course
  createStudent(input: studentInput!): Student
  "Edit Course"
  editCourse(input: courseEditInput!):Course
  addStudentToCourse(courseID: ID!,studentID: ID!):Course
  deleteStudentToCourse(courseID: ID!,studentID: ID!):Course
}
`);

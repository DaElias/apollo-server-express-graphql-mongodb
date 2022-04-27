const { Schema, model } = require("mongoose");

const StudentSchema = Schema({
  name: { type: String, require: [true, "Student in required"] },
  email: { type: String, require: [true, "Email in required"], unique: true },
});

module.exports = model("Student", StudentSchema);

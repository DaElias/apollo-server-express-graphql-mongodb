const mongoose = require("mongoose");
const dbConection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_ATLAS_ACCESS_ID}:${process.env.MONGODB_ATLAS_ACCESS_PASSWORD}@cluster0.hrujh.mongodb.net/CursoGraphql`
    );
    console.log("db on line");
  } catch (error) {
    console.log("error db: ", error);
  }
};

module.exports = {
  dbConection,
};

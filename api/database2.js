const mongoose = require("mongoose");
const MONGODB_URI = require("./mongoconfig.js")

const connectMongodb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    return 'ok';
  }
  catch (error) {
    return error.message;
  }
};

module.exports = connectMongodb;

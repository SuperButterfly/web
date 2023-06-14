const {
  Translation
} = require("../database.js");

const addFile = async (req, res, next) => {
  const { file } = req.body
  try{
    const newFile = await Translation.create(file)
  }catch(error){
    console.log(error.message)
    return next(error);
  }
}

module.exports = {
  addFile
};
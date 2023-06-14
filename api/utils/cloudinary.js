const cloudinary = require('cloudinary').v2;

// Configuration 
cloudinary.config({
  cloud_name: "dagc8g5me",
  api_key: "322871413519349",
  api_secret: "u6ePCLkEmTSPWO5cTGv0YeWWjA0"
});

module.exports = cloudinary;

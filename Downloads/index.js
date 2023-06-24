const { readFileSync } = require('fs');

const readDownload = (name) => {
  const file = __dirname + '/' + name;
  try {
    return  readFileSync(file);
  } catch (error) {
    return error.message;
  }
};

module.exports = readDownload;

const downProject = require("./getTemplate/download.js");

const getTeleProject = async (URL) => {
  try {
    const downRes = await downProject(URL);
    if (downRes !== "ok") throw new Error(downRes);
    return downRes;
  } catch (e) {
    return e.message;
  }
};

module.exports = { getTeleProject };

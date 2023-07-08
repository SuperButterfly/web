const verifyToken = (req, res, next) => {
  // const token = req.headers["credential"];
  try {
    // console.log("token: ", token);
    /*
    validaciones
    */
    next()
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  verifyToken
}

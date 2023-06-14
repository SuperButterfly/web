const signIn = (req, res, next) => {
  const {user} = req.body;
  try {
    console.log(user);
    /*
    validaciones
    generar token
    */
    res.json({user: 'user', tkn: 'tkn'});
  }
  catch (error) {
    return next(error);
  }
};

const signUp = (req, res, next) => {
  const {user} = req.body;
  try {
    console.log(user);
    /*
    validaciones
    generar token
    */
    res.json({user: 'user', tkn: 'tkn'});
  }
  catch (error) {
    return next(error);
  }
};

module.exports = {
  signIn, signUp
};
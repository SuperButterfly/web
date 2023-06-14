const { Router } = require('express');
const pruebaRouter = Router();

pruebaRouter.get('/prueba', (req, res, next) => {
  try {
    res.send('Hoal soy la prueba');
  } catch (error) {
    return next(error)
  }
});

module.exports = pruebaRouter;

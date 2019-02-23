const router = require('express').Router();

router.get('/users/login', (req, res) => {
  res.send('Ingresando');
});

router.get('/users/signup', (req, res) => {
  res.send('Registro');
});

module.exports = router;
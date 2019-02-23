const router = require('express').Router();

router.get('/products', (req, res) =>{
  res.send('Lista de productos');
});

module.exports = router;
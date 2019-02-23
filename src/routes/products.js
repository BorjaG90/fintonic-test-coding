const router = require('express').Router();

router.get('/products/new', (req, res) => {
  res.render('products/new_product');
});

router.post('/products/new', (req, res) => {
  console.log(req.body);
  res.send('OK');
});

router.get('/products', (req, res) =>{
  res.send('Lista de productos');
});

module.exports = router;
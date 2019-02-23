const router = require('express').Router();

router.get('/products/new', (req, res) => {
  res.render('products/new_product');
});

router.post('/products/new', (req, res) => {
  const { name, description } = req.body;
  const errors = [];
  if(!name) {
    errors.push({text: 'Escriba un nombre'});
  }
  if(errors.length > 0){
    res.render('products/new_product', {
      errors,
      name,
      description
    });
  } else {
    res.send('Ok');
  }
});

router.get('/products', (req, res) =>{
  res.send('Lista de productos');
});

module.exports = router;
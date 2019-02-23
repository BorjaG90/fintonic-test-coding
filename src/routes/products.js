const router = require('express').Router();

const Product = require('../models/Product');

router.get('/products/new', (req, res) => {
  res.render('products/new-product');
});

router.post('/products/new', async (req, res) => {
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
    const newProduct = new Product({ name, description });
    await newProduct.save();
    res.redirect('/products');
  }
});

router.get('/products', async (req, res) =>{
  const products = await Product.find().sort({date: 'desc'});
  res.render('products/all-products', { products });
});

module.exports = router;
const router = require('express').Router();

const Product = require('../models/Product');

// Add product
router.get('/products/new', (req, res) => {
  res.render('products/new-product');
});

router.post('/products/new', async (req, res) => {
  const { name, description } = req.body;
  const errors = [];
  // Validation
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
    req.flash('success_msg', 'Producto agregado satisfactoriamente');
    res.redirect('/products');
  }
});

// List product
router.get('/products', async (req, res) => {
  const products = await Product.find().sort({date: 'desc'});
  res.render('products/all-products', { products });
});

// Edit product
router.get('/products/edit/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('products/edit-product', {product});
});

router.put('/products/edit-product/:id', async (req, res) => {
  const {name, description} = req.body;
  await Product.findByIdAndUpdate(req.params.id, {name, description});
  req.flash('success_msg', 'Producto actualizado satisfactoriamente');
  res.redirect('/products');
});

// Remove product
router.delete('/products/delete/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  req.flash('success_msg', 'Producto eliminado satisfactoriamente');
  res.redirect('/products');
});

module.exports = router;
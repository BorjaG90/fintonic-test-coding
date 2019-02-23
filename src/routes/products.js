const router = require('express').Router();

const Product = require('../models/Product');

// Añadir producto
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

// Listar productos
router.get('/products', async (req, res) => {
  const products = await Product.find().sort({date: 'desc'});
  res.render('products/all-products', { products });
});

// Editar producto
router.get('/products/edit/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('products/edit-product', {product});
});

router.put('/products/edit-product/:id', async (req, res) => {
  const {name, description} = req.body;
  await Product.findByIdAndUpdate(req.params.id, {name, description});
  res.redirect('/products');
});

module.exports = router;
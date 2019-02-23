const router = require('express').Router();

const User = require('../models/User')

const passport = require('passport');

// Login
router.get('/users/login', (req, res) => {
  res.render('users/login');
});

router.post('/users/login', passport.authenticate('local', {
  successRedirect: '/products',
  failureRedirect: '/users/login',
  failureFlash: true
}));

// Register User
router.get('/users/signup', (req, res) => {
  res.render('users/signup');
});

router.post('/users/signup', async (req, res)=> {
  const { name, email, pass, confirm_pass } = req.body;
  const errors = [];
  // Validation
  if(pass != confirm_pass) {
    errors.push({text: 'Las contraseñas no coinciden'});
  }
  if(pass.length < 6) {
    errors.push({text: 'La contraseña debería ser mayor de 6 caracteres'});
  }
  if(errors.length > 0){
    res.render('users/signup', {errors, name, email, pass, confirm_pass});
  } else {
    const emailUser = await User.findOne({email: email});
    if(emailUser){
      req.flash('error_msg', 'El correo ya está en uso');
      res.redirect('/users/signup');
    }
    const newUser = new User({name, email, pass});
    newUser.password = await newUser.encryptPassword(pass);
    await newUser.save();
    req.flash('success_msg', 'Estas registrado');
    res.redirect('/users/login');
  }
});

module.exports = router;
const router = require('express').Router();

router.get('/users/login', (req, res) => {
  res.render('users/login');
});

router.get('/users/signup', (req, res) => {
  res.render('users/signup');
});

router.post('/users/signup', (req, res)=> {
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
    
  }
});

module.exports = router;
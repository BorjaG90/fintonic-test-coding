const mongoose = require('mongoose');


mongoose.connect(
  // Uso una BBDD de mLab propia, 
  // para usar una diferente, sustituir esta cadena de conexion 
  'mongodb://fintonic:fintonic201902@ds349045.mlab.com:49045/test-nodejs', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
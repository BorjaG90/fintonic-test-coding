const express = require('express');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware

// Global variables

// Routes

// Static Files

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
const   express     = require('express'),
        path        = require('path'),
        hbs         = require('express-handlebars');
// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middleware

// Global variables

// Routes

// Static Files

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
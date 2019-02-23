const   express         = require('express'),
        path            = require('path'),
        hbs             = require('express-handlebars'),
        methodOverride  = require('method-override'),
        session         = require('express-session');
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
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'fintonictestapi',
    resave: true,
    saveUninitialized: true
}));

// Global variables

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/products'));
app.use(require('./routes/users'));

// Static Files

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
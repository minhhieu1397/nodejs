var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser('asdasdq424efsfdf'));
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var port =3000;


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-demo');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static('public'))

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/product', productRoute);
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('index', {
        name: 'AA'
    });
});

app.listen(port, function() {
    console.log('Server listening on port: '+ port);
});
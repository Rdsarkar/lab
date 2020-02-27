var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var exSession = require('express-session');
var cookieParser = require('cookie-parser');
var alogin = require('./controllers/alogin');
var areg =  require('./controllers/areg')
var clogin = require('./controllers/clogin');
var cvHome = require('./controllers/cvHome');
var cReg = require('./controllers/cReg');

var app = express();


//configuration
app.set('view engine', 'ejs');


//middleWare
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret:'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use('/alogin',alogin);
app.use('/areg',areg);
app.use('/clogin',clogin);
app.use('/cvHome', cvHome);
app.use('/cReg',cReg);




//routes
app.get('/', function(req, res){
	res.send('This is App for online_computer_shop_node');
});


//server startup
app.listen(3000, function(){
	console.log('server started at 3000!');
});
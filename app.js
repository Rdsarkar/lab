var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var exSession = require('express-session');
var cookieParser = require('cookie-parser');
var areg =  require('./controllers/areg');
var alogin = require('./controllers/alogin');
var cReg = require('./controllers/cReg');
var clogin = require('./controllers/clogin');
var cHome = require('./controllers/cHome');
var alogout=require('./controllers/alogout');
var clogout= require('./controllers/clogout');
var portal= require('./controllers/portal');
var ram = require('./controllers/ram');

var app = express();


//configuration
app.set('view engine', 'ejs');


//middleWare
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret:'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use('/areg',areg);
app.use('/alogin',alogin);
app.use('/cReg',cReg);
app.use('/clogin',clogin);
app.use('/cHome', cHome);
app.use('/alogout',alogout);
app.use('/clogout',clogout);
app.use('/portal',portal);
app.use('/ram',ram);





//routes
app.get('/', function(req, res){
	res.send('This is App for online_computer_shop_node');
});


//server startup
app.listen(3000, function(){
	console.log('server started at 3000!');
});
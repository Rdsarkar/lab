var express = require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
	console.log('Customer login page requested!');
	res.render('customerLogin/index');
});

router.post('/', function(req, res){
		
    var customer ={
        cname: req.body.cname,
        password: req.body.password
    };

    userModel.cvalidate(customer, function(status){
        if(status){
            res.cookie('cname', req.body.cname);
            res.redirect('/cHome');
        }else{
            res.redirect('/clogin');
        }
    });
});


module.exports = router;

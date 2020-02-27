var express = require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
	console.log('login page requested!');
	res.render('adminReg/index');
});

router.post('/', function(req, res){
		
    var user ={
        username: req.body.uname,
        password: req.body.password
    };

    userModel.insert(user, function(status){
        if(status){
            res.cookie('username', req.body.uname);
            res.redirect('/customerLogin');
        }else{
            res.redirect('/customerReg');
        }
    });
});


module.exports = router;
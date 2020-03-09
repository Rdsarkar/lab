var express = require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
	console.log('login page requested!');
	res.render('adminReg/adminReg.ejs');
});

router.post('/', function(req, res){
		
    var admin ={

        aname: req.body.aname,
        password: req.body.password

    };

    userModel.ainsert(admin, function(status){
        if(status){

            res.redirect('/alogin');

        }else{

            res.render('adminReg/adminReg.ejs');

        }
    });
});


module.exports = router;
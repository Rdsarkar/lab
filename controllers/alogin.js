var express = require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
	console.log('admin login page requested!');
	res.render('adminLogin/index');
});

router.post('/', function(req, res){
		
    var admin ={
        aname: req.body.aname,
        password: req.body.password
    };

    userModel.avalidate(admin, function(results){
        if(results){
            res.cookie('aname', req.body.aname);
            res.redirect('/cReg');
        }else{
            res.redirect('/alogin');
        }
    });
});


module.exports = router;

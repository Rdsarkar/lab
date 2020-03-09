var express = require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('*',function(req,res,next){
    if(req.cookies['aname'] == null){
        res.redirect('/alogin');
    }else{
        next();
    }
})


router.get('/', function(req, res){
	console.log('customer Registration page requested!');
	res.render('customerReg/index');
});

router.post('/', function(req, res){
		
    var customer ={
        cname: req.body.cname,
        password: req.body.password,
        contact: req.body.contact
    };

    userModel.customerInsert(customer, function(status){
        if(status){
            res.redirect('/clogin');
        }else{
            res.redirect('/cReg');
        }
    });
});


module.exports = router;
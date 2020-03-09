var express = require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');


router.get('/',function(req,res){
    

    if(req.cookies['cname'] == null){
        res.redirect('/clogin');
    }else{
        console.log('Customer Home page rendering');
        res.render('ram/ram');
    }
    

}

);




module.exports = router;
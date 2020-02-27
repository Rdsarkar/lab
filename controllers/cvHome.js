var express = require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');



router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/customerLogin');
	}else{
		next();
	}
});


router.post('/',function(req,res,next){
    var customer = {
		username: req.body.username,
        password: req.body.password,
        contact: req.body.contact
    };
    
    userModel.getByUname(customer, function(status){
        if(req.cookies['username'] != null ){
            res.render('/', {user = result})
        }
        else{
            res.redirect('/customerLogin');
        }

    })

})


module.exports = router;

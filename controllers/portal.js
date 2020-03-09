var express 	= require('express');
var router 		= express.Router();
var userModel   = require.main.require('./models/user-model');

router.get('*', function(req, res, next){
	if(req.cookies['aname'] == null){
		res.redirect('/alogout');
	}else{
		next();
	}
});

router.get('/', function(req, res){	
	
		userModel.allcustomers(function(results){
			res.render('adminHome/index', ({results: results}));
		});
	
});

module.exports = router;
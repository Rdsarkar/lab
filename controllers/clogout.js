var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	res.clearCookie('cname');
	res.redirect('/clogin');
});

module.exports = router;
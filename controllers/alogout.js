var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	res.clearCookie('aname');
	res.redirect('/alogin');
});

module.exports = router;
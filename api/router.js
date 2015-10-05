/*
	Simple messages-api end point
*/
var express = require('express');
var router = express.Router();
var https = require('https');
var config = require("../configs/main");

router.get('/', function(req, res, next) {

	res.send([
		{'author':'Chris','message':'I want to go home'},
		{'author':'John','message':'This is not hapi.js'},
		{'author':'Dan','message':'LOL'}
	]);

});

module.exports = router;

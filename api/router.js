/*
	Simple messages-api end point
*/
var express = require('express');
var router = express.Router();
var https = require('https');
var config = require("../configs/main");

// Databases are overrated!
var messages = [];

router.get('/', function(req, res, next) {
	res.send(messages);
});

router.post('/', function(req, res, next) {
	if (req.body.message)
	{
		messages.push({
			'author':req.body.author,
			'message':req.body.message
		});
	}
	res.send(messages);
});

module.exports = router;

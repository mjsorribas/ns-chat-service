var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render("site/views/home", { pageTitle: 'NS-CHAT Web Demo' });
});

module.exports = router;

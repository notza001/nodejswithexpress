var express = require('express');
var router = express.Router();
var accessControl = require('./../app/accessControl');

/* GET home page. */
router.get('/',accessControl, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

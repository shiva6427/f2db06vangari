var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Frenchfries', { title: 'Search Results for Frenchfries' });
});

module.exports = router;
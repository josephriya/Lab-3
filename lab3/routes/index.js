
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('Home');
});

router.get('/father', function(req, res) {
  res.render('father');
});

router.get('/mother', function(req, res) {
  res.render('mother');
});

router.get('/sibling', function(req, res) {
  res.render('sibling');
});

router.get('/you', function(req, res) {
  res.render('you');
});

module.exports = router;

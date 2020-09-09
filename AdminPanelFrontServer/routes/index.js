const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/authorization', jsonParser, function(req, res, next) {
  console.log(req.body)
  res.send('authorization')
});

router.post('/checkNumber', jsonParser, function(req, res, next) {
  console.log(req.body)
  res.send('number')
});

module.exports = router;

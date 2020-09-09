const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const request = require('../functions/requestFunctions');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/authorization', jsonParser, async (req, res, next) => {
  console.log(1111111111111111, req.body);
  await request.authorization(req.body);
  res.send('authorization')
});

router.post('/checkNumber', jsonParser, async (req, res, next) => {
  console.log(req.body)
  await request.getStatusNumber(req.body.number);
  res.send('number')
});

module.exports = router;

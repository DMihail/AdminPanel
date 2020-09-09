const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();


// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({extended: false});


/* GET xml data. */
router.get('/api/subscribers/:number', function(req, res, next) {
  console.log(req.params.number);
  res.render('index', { title: 'Express' });
});

/* GET json data. */
router.get('/api/subscribers/:number', function(req, res, next) {
  console.log(req.params.number);
  res.render('index', { title: 'Express' });
});


/* POST Authorization. */
router.post('/authorization', jsonParser, function(req, res, next) {
  console.log(req.body)
  res.render('index', { title: 'Express' });
});

/* POST Registration. */
router.post('/registration', jsonParser, function(req, res, next) {
  console.log(req.body)
  res.render('index', { title: 'Express' });
});


module.exports = router;

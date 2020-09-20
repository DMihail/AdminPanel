const express = require('express');
const bodyParser = require('body-parser');
const request = require('./functions/requestFunctions');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});

const app = express()
/* GET home page. */
app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

app.post('/authorization', jsonParser, async (req, res, next) => {
    console.log(1111111111111111, req.body);
    await request.authorization(req.body);
    res.send('authorization')
});

app.post('/checkNumber', jsonParser, async (req, res, next) => {
    console.log(req.body)
    await request.getStatusNumber(req.body.number);
    res.send('number')
});

app.listen(8000)


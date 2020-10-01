const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    request = require('./functions/requestFunctions'),
   jsonParser = bodyParser.json();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.static('./build'));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 1500 }}))

// Access the session as req.session
// app.get('/', function(req, res, next) {
//     res.sendFile(__dirname + "/build/index.html");
// })

app.post('/authorization', jsonParser, async (req, res, next) => {
    const resp = await request.authorization(req.body);
    console.log(resp.data.token)
    req.session.tocken = resp.data.token;
    console.log(req.session)
    res.sendStatus(200)
});

app.post('/checkNumber', jsonParser, async (req, res, next) => {
    console.log(req.body)
    console.log(req.session)
    // await request.getStatusNumber(req.body.number);
    res.send('number')
});

app.listen(8000);
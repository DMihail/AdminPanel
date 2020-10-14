const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    request = require('./functions/requestFunctions'),
   jsonParser = bodyParser.json();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./build'));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 1500 }}))


app.post('/authorization', jsonParser, async (req, res, next) => {
    const resp = await request.authorization(req.body);
    console.log(resp.data)
    if (resp.data.tocken) {
        req.session.tocken = resp.data.tocken;
        console.log(req.session)
        res.send({ status: 200})
    } else {
        res.send({ status: 401})
    }
});

app.post('/checkNumber', jsonParser, async (req, res, next) => {
    console.log(req.body)
    console.log(req.session)
    // if (req.session.tocken) {
        const number = await request.getStatusNumber(req.body.number);
        if (number) {
            res.send({status: 200, statusNumber : number.data.statusNumber, number: number.data.number})
        // }
    }
});

app.listen(8000);

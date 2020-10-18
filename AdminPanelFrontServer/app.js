const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    request = require('./functions/requestFunctions'),
   jsonParser = bodyParser.json();

const {lofInfo} = require('./functions/logger');

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./build'));


app.get('/', function(req, res, next) {
    lofInfo("send Build to client {" + JSON.stringify(req) + "}");
    res.sendFile(__dirname + "/build/index.html");
})

app.post('/authorization', jsonParser, async (req, res, next) => {
    const resp = await request.authorization(req.body);
    console.log(resp.data)
    if (resp.data.tocken) {
        lofInfo("add token to client{" + JSON.stringify(req) + "}");
        req.session.tocken = resp.data.tocken;
        console.log(req.session)
        res.send({ status: 200})
    } else {
        lofInfo("not found user{" + JSON.stringify(req) + "}");
        res.send({ status: 401})
    }
});

app.post('/checkNumber', jsonParser, async (req, res, next) => {
    console.log(req.body)
    console.log(req.session)
    if (req.session.tocken) {
        const number = await request.getStatusNumber(req.body.number);
        lofInfo("send status{" + JSON.stringify(req) + "}");
        if (number) {
            res.send({status: 200, statusNumber : number.data.statusNumber, number: number.data.number})
        }
    }
});

app.listen(8000, () => {
    lofInfo("start server" + 8000)
    console.log("start server" + 8000)
});

const express = require('express');
const bodyParser = require('body-parser');
const hash = require('object-hash');
const base = require("./functions/database");
const app = express()
const database = new base();
const {lofInfo, lofError} = require('./functions/logger');
database.connect();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/api/subscribers/:number', async (req, res, next) => {
    const number = await database.getNumberStatus(req.params);
    if (number) {
        lofInfo("find status number" + JSON.stringify(number));
        res.send({
            number: number.number,
            statusNumber: number.statusNumber
        })
    } else if (number === null){
        lofInfo("find status number" + JSON.stringify(number));
        res.status(500).send({
            "error": "Number is not found"
        })
    } else {
        lofError("error find number " + JSON.stringify(number));
    }
});


app.get('/api/front/token', jsonParser, async (req, res, next) => {
    const user = await database.findUser(req.query);
    if (user) {
        lofInfo("find user" + JSON.stringify(user));
        const tocken = hash.sha1(req.query);
        res.status(200).send({
            tocken
        })
    } else if (user === null) {
        lofInfo("find user" + JSON.stringify(user));
        res.status(200).send({
            "error": "Login or password are wrong"
        })
    } else {
        lofError("error find user " + JSON.stringify(user))
    }
});

app.listen(5000, () => {
    lofInfo("start server" + 5000)
    console.log("start server" + 5000)
})

const express = require('express');
const bodyParser = require('body-parser');
const hash = require('object-hash');
const base = require("./functions/database");
const app = express()
const database = new base();
database.connect();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({extended: false});

/* GET xml data. */
app.get('/api/subscribers/:number', async (req, res, next) => {
    console.log(req.query)
    const number = await database.getNumberStatus(req.query.number);
    console.log(number)
    if (number) {
        res.send({
            number: number.number,
            statusNumber: number.statusNumber
        })
    } else {
        res.status(500).send({
            "error": "Number is not found"
        })
    }
});


/* POST get token. */
app.get('/api/front/token', jsonParser, async (req, res, next) => {
    console.log(req.query)
    const user = await database.findUser(req.query);
    if (user) {
        const tocken = hash.sha1(req.query);
        res.status(200).send({
            tocken
        })
    } else {
        res.status(200).send({
            "error": "Login or password are wrong"
        })
    }
});

app.listen(5000)

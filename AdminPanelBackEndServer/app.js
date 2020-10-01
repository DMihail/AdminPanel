const express = require('express');
const bodyParser = require('body-parser');
const hash = require('object-hash');
const base = require("./functions/database");
const app = express()

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({extended: false});

/* GET xml data. */
app.get('/api/subscribers/:number', (req, res, next) => {
    console.log(req.params.number);
        res.send('sfsddsdfsdf')
});


/* POST get token. */
app.get('/api/front/token', jsonParser, (req, res, next) => {
    console.log(req.query)
    const user = base.base.findUser(req.query);
    if (user) {
        const tocken = hash.sha1(req.query);
        res.status(200).send({
            tocken
        })
    } else {
        res.status(401).send({
            "error": "Login or password are wrong"
        })
    }
});

app.listen(5000)

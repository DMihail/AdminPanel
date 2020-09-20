const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');


const app = express()


app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 60000 }
}))
const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({extended: false});

/* GET xml data. */
app.get('/api/subscribers/:number', (req, res, next) => {
    console.log(req.params.number);
    res.send('sfsddsdfsdf')
});


/* POST get token. */
app.get('/api/front/token', jsonParser, (req, res, next) => {
    console.log(req.body)
    const { login, password } = req.body;
    req.session.user = login;
    res.send('111111111111111111')
});

app.listen(5000)

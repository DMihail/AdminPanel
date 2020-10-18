const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const assets = require('../serverData.json');
const {lofInfo, lofError} = require('./logger');

class  Database {
    constructor() {
        this.db = undefined;
        this.dbName = assets.dbName;
        this.url = assets.dbUrl;
        this.userCollection = undefined;
        this.numberCollection = undefined;
    }

    // Use connect method to connect to the server
    connect() {
        MongoClient.connect(this.url, {
            useUnifiedTopology: true,
            // retry to connect for 60 times
            reconnectTries: 60,
            // wait 1 second before retrying
            reconnectInterval: 1000
        }).then(client => {
            lofInfo("connect to base");
            console.log('connect')
             this.db = client.db(this.dbName);
             this.userCollection = this.db.collection("users");
             this.numberCollection = this.db.collection("numberstatus");
        }).catch(err => {
            lofError("error connect to base " + JSON.stringify(err));
            assert.equal(null, err);
            throw err;
        });
    }

    async findUser(userData){
        lofInfo("find user from base" + userData);
        return  await  this.userCollection.findOne(userData);
    }

    async getNumberStatus(number){
        lofInfo("find number from base" + number);
        return  await  this.numberCollection.findOne(number);
    }

}

module.exports = Database;


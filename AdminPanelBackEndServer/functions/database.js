const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const assets = require('../serverData.json');
const {lofInfo, lofError} = require('./logger');
const baseValue = require('../assets/defaultValue/value.json');

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
        }).then(async client => {
            lofInfo("connect to base");
            console.log('connect')
             this.db = client.db(this.dbName);
             await this.createBase()
        }).catch(err => {
            lofError("error connect to base " + JSON.stringify(err));
            assert.equal(null, err);
            throw err;
        });
    }

    async createBase() {
                console.log(await this.db.listCollections().toArray());
        const collections = await this.db.listCollections().toArray();
            if (!collections.filter(item => {
                return item.name === 'users';
            })) {
                await this.db.createCollection("users");
            }
        if (!collections.filter(item => {
            return item.name === 'numberstatus';
        })) {
            await this.db.createCollection("numberstatus");
        }

        this.userCollection = this.db.collection("users");
        this.numberCollection = this.db.collection("numberstatus");
         await this.checkPerson();
    }

    async findUser(userData){
        lofInfo("find user from base" + userData);
        try {
            return await this.userCollection.findOne(userData);
        }catch (e) {
            console.log(e);
        }
    }

    async getNumberStatus(number){
        lofInfo("find number from base" + number);
        return  await  this.numberCollection.findOne(number);
    }

    async checkPerson() {
        const users = await this.userCollection.find({}).toArray();
        console.log(users.length)
        if (!users.length) {
            await this.addValueToBase();
        }
    }

    async addValueToBase() {
        for (let key in baseValue) {
            for (let i = 0; i < baseValue[key].length; i++) {
                await this.db.collection(key).insertOne(baseValue[key][i])
            }
        }
    }

}

module.exports = Database;


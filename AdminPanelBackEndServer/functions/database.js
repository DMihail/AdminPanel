const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


class  Database {
    constructor() {
        this.db = undefined;
        this.dbName = 'adminpanel'
        this.url = 'mongodb://admin:admin1@ds343718.mlab.com:43718/adminpanel';
        this.userCollection = undefined;
        this.numberCollection = undefined;
    }

    // Use connect method to connect to the server
    connect() {
        MongoClient.connect(this.url, {useUnifiedTopology: true}).then(client => {
            console.log('connect')
             this.db = client.db(this.dbName);
             this.userCollection = this.db.collection("users");
             this.numberCollection = this.db.collection("numberstatus");
        }).catch(err => {
            assert.equal(null, err);
            throw err;
        });
    }

    async findUser(userData){
        console.log()
        return  await  this.userCollection.findOne(userData);
    }

    async getNumberStatus(number){
        return  await  this.numberCollection.findOne(number);
    }

    // addUser() {
    //     const _this = this;
    //     const myobj = {login: "ananas", password: "123456"};
    //     this.userCollection.insertOne(myobj, function(err, res) {
    //         if (err) throw err;
    //         console.log("1 document inserted");
    //         _this.db.close();
    //     });
    // }

    // addNumberAndStatus() {
    //     const _this = this;
    //     const myobj = {number: "+(380)123123124", statusNumber: "subscriber is blocke"};
    //     this.numberCollection.insertOne(myobj, function(err, res) {
    //         if (err) throw err;
    //         console.log("1 document inserted");
    //         // _this.db.close();
    //     });
    // }
}

module.exports = Database;

// const database = new Database();
// database.connect();

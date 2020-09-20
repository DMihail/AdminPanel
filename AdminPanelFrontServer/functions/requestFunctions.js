const res = require("express");
const axios = require('axios').default;

const authorization = async (userData) => {
    console.log(userData)
    try {
        const response = await axios.get('http://localhost:5000/api/front/token', {
            params: userData
        });
        if (response.status === 200) {
            // console.log(response)
            // res.send({status: true});
        }
    } catch (error) {
        console.error(error);
    }
}

const getStatusNumber = async (number) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/subscribers/` + number);
    } catch (error) {
        console.error(error);
    }
}

module.exports.authorization = authorization;
module.exports.getStatusNumber = getStatusNumber;

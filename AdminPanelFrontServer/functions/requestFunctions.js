const res = require("express");
const axios = require('axios').default;

const authorization = async (userData) => {
    console.log(userData)
    try {
        return await axios.get('http://localhost:5000/api/front/token', {
            params: userData
        });
    } catch (error) {
        console.error(error);
    }
}

const getStatusNumber = async (number) => {
    try {
      return  await axios.get(`http://localhost:5000/api/subscribers/` + number);
    } catch (error) {
        console.error(error);
    }
}

module.exports.authorization = authorization;
module.exports.getStatusNumber = getStatusNumber;

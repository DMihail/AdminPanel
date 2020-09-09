const axios = require('axios').default;

const authorization = async (userData) => {
    try {
        const response = await axios.post('http://localhost:5000/authorization', userData);
        // console.log(response);
    } catch (error) {
        console.error(error);
    }
}

const registration = async (userData) => {
    try {
        const response = await axios.post('http://localhost:5000/registration', userData);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

const getStatusNumber = async (number) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/subscribers/` + number);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

module.exports.authorization = authorization;
module.exports.registration = registration;
module.exports.getStatusNumber = getStatusNumber;

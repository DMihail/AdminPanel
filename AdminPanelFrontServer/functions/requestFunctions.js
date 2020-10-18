const axios = require('axios').default;
const {lofInfo, lofError} = require('./logger');

const authorization = async (userData) => {
    console.log(userData)
    try {
        lofInfo("get token {" + JSON.stringify(userData) + "}");
        return await axios.get('http://localhost:5000/api/front/token', {
            params: userData
        });
    } catch (error) {
        lofError("error get token user " + JSON.stringify(userData) + " error " + error );
        console.error(error);
    }
}

const getStatusNumber = async (number) => {
    try {
        lofInfo("get status number  {" + JSON.stringify(number) + "}");
      return  await axios.get(`http://localhost:5000/api/subscribers/` + number);
    } catch (error) {
        lofError("error get Status Number " + JSON.stringify(number) + " error " + error );
        console.error(error);
    }
}

module.exports.authorization = authorization;
module.exports.getStatusNumber = getStatusNumber;

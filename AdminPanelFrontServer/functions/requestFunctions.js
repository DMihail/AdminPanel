const axios = require('axios').default;

const Authorization = async (userData) => {
    try {
        const response = await axios.post('http://localhost:5000/authorization', userData);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

const Registration = async (userData) => {
    try {
        const response = await axios.post('http://localhost:5000/registration', userData);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

const getXMLData = async (number) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/subscribers/` + number);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

const getJSONData = async (number) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/subscribers/` + number);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

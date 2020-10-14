import axios from 'axios';

const url = "http://localhost:8000";

export const signIn = async (login, password) => {
    return await axios.post('/authorization', {
        login,
        password
    });
}

export const checkNumber = async (number) => {
    return await axios.post('/checkNumber', {
        number,
    });
}

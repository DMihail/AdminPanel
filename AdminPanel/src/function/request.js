import axios from 'axios';

export const signIn = async (login, password) => {
    return await axios.post('http://localhost:8080/authorization', {
        login,
        password
    });
}

export const checkNumber = async (number) => {
    return await axios.post('http://localhost:8080/checknuuber', {
        number,
    });
}
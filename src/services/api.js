import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.csa.com.br/v1'
});

export default api;
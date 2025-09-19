import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:32779'
});

export default api;
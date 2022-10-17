import axios from "axios";

const getAPI = async (url, token) => {
    axios.defaults.headers.auth = `Bearer + ${token}`;
    axios.defaults.baseURL = "localhost:8000";

    const response = await axios.get(url);
    return response;
};

const postAPI = async (url, token, body) => {
    axios.defaults.headers.auth = `Bearer + ${token}`;
    axios.defaults.baseURL = "localhost:8000";

    const response = await axios.post(url, body);
    return response;
};

const axios_functions = { getAPI, postAPI };

export default axios_functions;

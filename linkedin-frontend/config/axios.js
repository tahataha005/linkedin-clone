import axios from "axios";

const getAPI = async (url, token) => {
    axios.defaults.headers.auth = `Bearer + ${token}`;
    axios.defaults.baseURL = "localhost:8000";

    const response = await axios.get(url);
    return response;
};

export default getAPI;

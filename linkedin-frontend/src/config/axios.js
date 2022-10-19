import axios from "axios";

const token = localStorage.getItem("token");
axios.defaults.headers.authorization = "Bearer " + token;
axios.defaults.baseURL = "http://localhost:8000";

const sendRequest = async ({ method = "GET", data = null, route = null }) => {
    if (!route) throw Error("URL Required");
    if (method === "GET") {
        const response = await axios.get(route);
        return response.data;
    }
    const response = await axios.request({
        method: method,
        data: data,
    });
    return response.data;
};

export default sendRequest;

import axios from "axios";

const configuredApiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, "");
const apiUrl = configuredApiUrl?.endsWith("/api")
    ? configuredApiUrl
    : `${configuredApiUrl}/api`;

const client = axios.create({
    baseURL: apiUrl
});

client.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;

});

export default client;

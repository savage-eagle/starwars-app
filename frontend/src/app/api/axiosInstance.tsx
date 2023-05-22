import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.defaults.headers.common["Content-Type"] = "application/json";

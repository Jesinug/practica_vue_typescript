import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;

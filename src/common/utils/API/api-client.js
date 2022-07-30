import axios from "axios";

const baseURL = import.meta.env.VITE_FRONTEND_URL.contains("bngroovy.com")
  ? import.meta.env.VITE_FRONTEND_URL
  : "https://localhost:3000";

const apiClient = axios.create({
  baseURL,
});

export default apiClient;

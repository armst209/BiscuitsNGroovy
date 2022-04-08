import axios from "axios";

const baseURL = process.env.REACT_APP_FRONTEND_URL.contains("bngroovy.com")
  ? process.env.REACT_APP_FRONTEND_URL
  : "https://localhost:3000";

const apiClient = axios.create({
  baseURL,
});

export default apiClient;

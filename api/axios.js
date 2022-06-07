import axios from "axios";

const API_URL = "http://localhost:9999/";

const api = (slug) =>
  axios.create({
    baseURL: `${API_URL}${slug}`,
  });

export default api;

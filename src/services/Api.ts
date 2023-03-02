import axios from "axios";


const api = axios.create({
    baseURL: import.meta.env.VITE_API_KEY,
    headers: {
        "Content-type": "application/json"
      }
});

export default api;
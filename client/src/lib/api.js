import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_PATH || 'http://localhost:4000/api',
    withCredentials: true,
});

api.interceptors.response.use(
    res => res,
    err => {
        if (err?.response?.status === 401) {
            window.location.assign('/login');
            return Promise.reject(err);
        }
    }
);

export default api;
export { api };

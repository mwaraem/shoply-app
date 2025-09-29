import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api',
    withCredentials: true,
});

// Add a request interceptor to include token
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
)

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

import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }   
});

api.interceptors.request.use((config) => {
    if(typeof window !== 'undefined'){
        const authStorage = localStorage.getItem('auth-storage');
        if(authStorage) {
            const { state } = JSON.parse(authStorage);
            if(state.token) {
                config.headers.Authorization = `Bearer ${state.token}`;
            }
        }
    }

    return config;
},
    (error) => {
        return Promise.reject(error);
    }
);

export default api;

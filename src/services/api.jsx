import axios from 'axios';

let instance = axios.create({ baseURL: `https://businesssuiteonline.website` });

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('user-token');
    if (token) config.headers['x-access-token'] = token;
    document.body.classList.add('loading-indicator');
    return config;
}, (error) => {
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    document.body.classList.remove('loading-indicator');

    if (response.status === 200 &&
        response.config.method?.toLowerCase() !== "get" &&
        response.data.message !== "") {
        // Handle specific response cases here if needed.
    }

    return response;
}, (error) => {
    document.body.classList.remove('loading-indicator');

    if (error.response.status === 401 && error.response.data.status === 2) {
        localStorage.removeItem('user');
        return window.location.href = '/';
    }

    if (error.response.status === 2) {
        // Clear local storage
        localStorage.clear();
        // Redirect to the home page
        window.location.href = '/';
        return Promise.reject("Unauthorized Access");
    }

    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
});

export default instance;
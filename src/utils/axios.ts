import axios, { AxiosInstance } from 'axios';

const Axios:  AxiosInstance = axios.create({
  baseURL: 'https://api.altirev.com/api', // Replace with your API base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can set up request interceptors
Axios.interceptors.request.use(
  config => {
    // You can add authorization headers or any custom headers here
    // Example: config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// You can also set up response interceptors
Axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Handle errors globally
    if (error.response) {
      // Server-side error
      console.error('Server Error:', error.response.data);
    } else if (error.request) {
      // No response received from the server
      console.error('Network Error:', error.request);
    } else {
      // Client-side error
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default Axios;

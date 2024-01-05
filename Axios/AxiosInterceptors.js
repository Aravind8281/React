import React, { useEffect } from 'react';
import axios from 'axios';
const App = () => {
  useEffect(() => {
    localStorage.setItem('authToken', 'your_fake_token');
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        console.log('API Response:', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>React App with Axios Interceptors</h1>
    </div>
  );
};
axios.interceptors.request.use(
  config => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      config.headers['Authorization'] = `Bearer ${authToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      console.log('Unauthorized access. Redirecting to login page.');
    }
    return Promise.reject(error);
  }
);

export default App;

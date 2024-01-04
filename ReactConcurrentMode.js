/*React Concurrent Mode is a set of new features in the React library that aims to improve the user experience by making React applications more responsive and resilient to changes. 
It introduces new ways of rendering components that allow React to work on tasks concurrently, without blocking the main thread.
This helps in maintaining a smooth and responsive user interface, especially when dealing with complex and asynchronous operations*/


import React, { useState, useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom';
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data loaded successfully!');
    }, 2000);
  });
};
const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataAsync();
  }, []);

  if (!data) {
    throw fetchDataAsync(); // Throw a promise to trigger Suspense
  }

  return <div>{data}</div>;
};
const App = () => {
  return (
    <div>
      <h1>Hello, Concurrent Mode!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <DataFetcher />
      </Suspense>
    </div>
  );
};

// Create a root with Concurrent Mode
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use Concurrent Mode to render the app
root.render(<App />);

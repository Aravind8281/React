/*
useDebugValue is a React Hook that allows developers to display custom labels or values for custom hooks in the React DevTools.
It provides a way to add debugging information to custom hooks, making it easier to inspect and understand their behavior during development
*/
import React, { useEffect, useState, useDebugValue } from 'react';
const useDataFetching = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  // Attach loading state to React DevTools
  useDebugValue(loading ? 'Loading...' : 'Data Loaded');
  return { data, loading };
};
const App = () => {
  const { data, loading } = useDataFetching('https://api.example.com/data');

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Data:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;

import React from 'react';
import axios from 'axios';
const App = () => {
  const data={
    title: '',
    body: '',
    userId: 1,
  }
  axios.post('https://jsonplaceholder.typicode.com/posts',data)
  .then(response=>{
    console.log(response.data)
  })
  .catch(error=>{
    console.log(error)
  })
  return (
    <div>
      Axios Data Fetching
    </div>
  );
};

export default App;

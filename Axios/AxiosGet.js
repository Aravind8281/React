import React from 'react';
import axios from 'axios';
const App = () => {
  axios.get('url')
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

import React from 'react';
import axios from 'axios'; 
const App = () => {
  axios({
    method:'get',
    url:'',
    headers:{ 'Content-Type': 'application/json' },
    timeout:5000
  })
  .then(response=>{
    console.log(response.data);
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

// Async and await function is highly effective to handle the promise data 

import React from 'react';
import axios from 'axios';
const App = () => {
  async function fetchdata(){
    try{
      const response=await axios.get('')
      console.log(response.data)
    }catch(error){
      console.log(error)
    }
  }
  fetchdata()
  return (
    <div>
      Axios Data Fetching
    </div>
  );
};

export default App;

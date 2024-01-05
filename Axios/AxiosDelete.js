import React from 'react';
import axios from 'axios';
const App = () => {
  async function deleteData(){
    try{
      const response=await axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      console.log(response)
    }
    catch(error){
      console.log("error",error)
    }
  }
  deleteData()
  return (
    <div>
      Axios Data Fetching
    </div>
  );
};

export default App;

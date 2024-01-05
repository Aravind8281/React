import React from "react";
import axios from 'axios';
function App(){
  const source=axios.CancelToken.source();
  axios.get('',{cancelToken:source.token})
  .then(response=>{
    console.log(response.data);
  })
  .catch(error=>{
    if(axios.isCancel(error)){
      console.log("Fetching Canceled By user ")
    }
    else{
      console.log("helllo")
    }
  })
  source.cancel("Request Canceled by user")
 return(
  <>
  </>
 )
}
export default App;

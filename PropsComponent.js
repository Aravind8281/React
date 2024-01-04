/* Props is simply used to pass messages between components */

import './App.css';
import Prop from './Components/Functional';
function App() {
  return (
    <div className="App">
      <Prop message={"hello"}/>
    </div>
  );
}

export default App;


import React from "react";
function Prop(props){
    return(
        <div>
            {
                props.message
            }
        </div>
    )
}
export default Prop;

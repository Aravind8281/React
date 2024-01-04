/*The Context API in React provides a way to share values like themes, user authentication status, 
or other global states between components without explicitly passing them through props at every level of the component tree.
It consists of two main parts: the Context object and the Provider component.*/
import React, { useState } from "react";
import MyContext from "./Components/MyContext";
import ChildComponent from "./Components/Consumer";

function App() {
  const [value, setValue] = useState("Default Value");
  return (
    <MyContext.Provider value={value}>
      <div>
        <h1>App Component</h1>
        <ChildComponent />
      </div>
    </MyContext.Provider>
  );
}

export default App;

import React from "react";
const MyContext=React.createContext();
export default MyContext;


import React, { useContext } from "react";
import MyContext from "./MyContext"; 
function ChildComponent() {
  const contextValue = useContext(MyContext);
  return (
    <div>
      <h2>Child Component</h2>
      <p>Context Value: {contextValue}</p>
    </div>
  );
}
export default ChildComponent;

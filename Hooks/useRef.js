/*
The useRef hook is a React Hook that provides a way to create mutable object references that persist across renders. 
Unlike the useState hook, changes to the ref object don't trigger a re-render. useRef is commonly used to access or store references to DOM elements
*/
import React, { useEffect, useRef } from "react";
function App() {
  const inputref=useRef(0);
  useEffect(()=>{
    inputref.current.focus();
  }
  ,[])
  return (
    <div className="App">
      <h1>Using useRef in React</h1>
      <form>
        <input type="text" ref={inputref} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

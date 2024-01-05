/*
useLayoutEffect is a React Hook that is similar to useEffect, but it fires synchronously after all DOM mutations. 
It allows you to perform side effects in a React component immediately after the browser has finished painting, before the next paint. 
This is especially useful for scenarios where you need to measure layout or perform actions that require updated dimensions or positions of elements
*/

import React, { useLayoutEffect, useRef } from "react";

function App() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    const box = inputRef.current;

    if (box) {
      const width = box.clientWidth;
      const height = box.clientHeight;
      console.log("Dimensions", width * height);
    }
  }, []);

  return <div ref={inputRef}>This is a box</div>;
}

export default App;

/*The useEffect hook in React is used for handling side effects in functional components. 
Side effects can include data fetching, subscriptions, manual DOM manipulations, and other actions that occur outside the normal flow of React rendering. 
useEffect is called after every render and can be used to perform cleanup as wel*/
import React, { useEffect, useState } from "react";

function Prop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      console.log(`count: ${count}`);
    }

    return () => {
      console.log("React hook cleanup");
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default Prop;

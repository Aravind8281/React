/*a callback is a function that is passed as an argument to another function or component.
Callbacks are commonly used to handle asynchronous operations, events, or to pass data between parent and child components */
import React, { useState, useCallback } from 'react';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Using useCallback to memoize the handleClick function
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      {/* ChildComponent receives the memoized handleClick function */}
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

const ChildComponent = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Click me
    </button>
  );
};

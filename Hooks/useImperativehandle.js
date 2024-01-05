/*useImperativeHandle is a React hook that is used to customize the instance value that is exposed when using React.forwardRef.
It allows you to control which values are exposed by the forwarded ref, providing a more controlled interface to the parent components
*/

import React, { useRef, useImperativeHandle, forwardRef } from 'react';
const Counter = forwardRef((props, ref) => {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current++;
  };
  useImperativeHandle(ref, () => ({
    increment,
  }));

  return (
    <div>
      <p>Count: {countRef.current}</p>
    </div>
  );
});

export default Counter;

import React, { useRef } from 'react';
import Counter from './Counter';

const ParentComponent = () => {
  const counterRef = useRef();

  const handleIncrement = () => {
    counterRef.current.increment();
  };

  return (
    <div>
      <Counter ref={counterRef} />
      <button onClick={handleIncrement}>Increment from Parent</button>
    </div>
  );
};

export default ParentComponent;

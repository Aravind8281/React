/*Lazy loading is a technique in React that allows you to defer the loading of certain components or assets until they are actually needed.
This can improve the initial loading time of your application, especially when dealing with large or complex applications where loading all components at once may lead to unnecessary resource consumption*/


import React, { lazy, Suspense } from 'react';
const LazyComponent = lazy(() => import('./Components/List'));
const App = () => {
  return (
    <div>
      <h1>Lazy Loading Example</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;

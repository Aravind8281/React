/*
The memo hook in React is a performance optimization feature that memoizes a functional component, 
preventing unnecessary re-rendering when the component's props remain the same. 
It's a higher-order component (HOC) that shallowly compares the current and previous props to determine whether the component should re-render
*/

import React, { memo } from "react";
const MyComponent=memo(({name,age})=>{
    return(
        <>
        <h2>{name}</h2>
        <h3>{age}</h3></>
    )
});
export default MyComponent;

/*
In React, a list is a collection of elements rendered using a map function or a similar approach. 
Each item in the list should have a unique identifier known as a "key." 
The key is a special string attribute that helps React identify which items have changed, been added, or been removed
*/
import React from "react";
function List(){
  const Lists=["item1","item2","item3"];
  return(
    <>
      <div>
        {Lists.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </div>
    </>
  )
}
export default List;

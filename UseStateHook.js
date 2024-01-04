/* Usestate used to maintain the state varibles and helps in re render*/
import React, { useState } from "react";
function Prop(){
    const [count,setcount]=useState(0);
    return(
        <div>
            Counter : {count}
            <button onClick={()=> setcount(count+1)}> Click</button>
        </div>
    )
}
export default Prop;

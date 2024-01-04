/*In a controlled component, the component's state is controlled by React. 
The value of the form element is stored in the component's state, and any changes to the input are handled by React event handlers. 
Controlled components provide more control over the form elements and their behavior.*/
import React, { useState } from "react";
function Controlled(){
    const [input,setinput]=useState('');
    const handleclick=(event)=>{
        setinput(event.target.value);
    }
    return(
        <div>
            <input type="text" value={input} onChange={handleclick} />
            <p>Input Value: {input}</p>
        </div>
    )
}
export default Controlled;

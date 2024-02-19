import React from "react";
const Child = React.memo(({handleClick})=>{
    console.log("child component is re-rendering");
    return(
        <>
        <button onClick={handleClick}>Increment</button>
        </>
    )
})
export default Child;
import React,{useContext} from "react";

import { MyContext } from "./UseContextApp";
function ComponentA(){
    console.log("compA rerendeing...");
    const contextValue =useContext(MyContext);
    
    return <div>componentA  : {contextValue}</div>
}
export default ComponentA
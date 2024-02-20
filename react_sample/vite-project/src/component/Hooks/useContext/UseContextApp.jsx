import React,{createContext} from "react";
import ComponentA from "./CompoentA";
import ComponentB from "./ComponentB";
export const MyContext = createContext('default');
function UseContextApp(){
    console.log("app rerendering..");
    return(
        <>
        <MyContext.Provider value="hello from context"> 
        <ComponentA />
        <ComponentB />

        </MyContext.Provider>
        </>
    )
}export default UseContextApp
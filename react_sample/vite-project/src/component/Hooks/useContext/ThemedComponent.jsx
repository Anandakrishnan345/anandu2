import React,{useContext} from "react";
import { ThemeContext } from "./UseContextApp1";
function ThemedComponent(){
    const { theme } = useContext(ThemeContext);
    return ( theme === 'white') ? ( <div style={{background : theme}}>Themedcomponent</div>) : (<div style={{background : theme , color: "white"}}>ThemedComponent</div>)
    
}
export default ThemedComponent
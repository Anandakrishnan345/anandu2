import React,{useContext} from "react";
import { ThemeContext } from "./UseContextApp1";
function ThemeSelector(){
    const {setTheme} = useContext(ThemeContext);
    return (
        <div>
            <button onClick={()=>setTheme('white')}>Light theme</button>
            <button onClick={()=>setTheme('black')}>Dark theme</button>
        </div>
    )
}
export default ThemeSelector
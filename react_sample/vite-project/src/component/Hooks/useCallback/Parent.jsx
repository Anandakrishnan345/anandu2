import { useCallback,useState } from "react";
import Child from "./Child";
function Parent(){
    console.log("parent component is re-rendering...");
    const [count,setCount] = useState(0);

    //defining a callback function using useCallback;
    const handleClick = useCallback(()=>{
        setCount(prevCount => prevCount + 1)
    },[]);
    return(
        <>
            <p>count : {count}</p>
            <Child handleClick={handleClick}/>
        </>
    )
}
export default Parent
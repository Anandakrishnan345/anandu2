import React , {useState} from "react";
const MyPureComponent = React.memo(({message})=>{
    console.log('re rendering..');
    return <div>{message}</div>
});
function MyPureComponent1(){
    const [count,setCount]=useState(1);
    return(
        <>
            <MyPureComponent message ={"form pure component"} />
            <p>count : {count}</p>
            <button onClick={()=>{setCount(count + 1)}}>Increment</button>
        </>
    )
}
export default MyPureComponent1
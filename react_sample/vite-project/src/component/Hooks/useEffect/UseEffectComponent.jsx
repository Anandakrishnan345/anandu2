import React,{useEffect} from "react";

function UseEffectComponent(){
    console.log('Component is rerendering...');
    useEffect(()=>{
        console.log('Component has rendered.....');

    },[]) //empty dependency array means it runs  once after initial render 
    return <div>my content</div>
}
export default UseEffectComponent
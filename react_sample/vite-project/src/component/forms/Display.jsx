import React,{useState} from "react";
function Display ({data}){
    console.log("display content rendering")
    return(
        <>
        <p>data : {data}</p>
        </>
    )
}
export default Display;
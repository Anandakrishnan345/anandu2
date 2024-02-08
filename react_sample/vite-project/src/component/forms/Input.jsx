
import React,{useState} from "react";
function Input({onsubmit}){
    console.log("input component rendering");
    const[name,setName]=useState('');
    const onSubmit = (e)=>{
        e.preventDefault();
        onsubmit(name);
    }
    const handleInputChange = (e)=>{
        setName(e.target.value)
    }
}
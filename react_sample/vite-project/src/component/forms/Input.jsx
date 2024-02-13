
import React,{useState} from "react";
function Input({onsubmit}){
    console.log("input component rendering");
    const[data,setData]=useState(
           { name : '',
           email : '',  

        });
    const onSubmit = (e)=>{
        e.preventDefault();
        onsubmit(data);
    }
    const handleInputChange = (e)=>{
        setData(e.target.value)
        if(e.target.name === "name"){
            setData({
                ...data,
                name : e.target.value,
            })
        }
        if(e.target.name ==="email"){
            setData({
                ...data,
                email : e.target.value,
            })

        }
    }
    return(
        <>
        <form onSubmit={onSubmit}>
            <input type="text" name="name" id="name" placeholder="enter name" onChange={handleInputChange} />
            <input type="email" name="email" id="email" placeholder="enter email" onChange={handleInputChange} />
            <input type="submit" />
        </form>
        </>
    )
}
export default Input;
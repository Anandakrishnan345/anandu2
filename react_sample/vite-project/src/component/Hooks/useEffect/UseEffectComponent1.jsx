import { useEffect,useState } from "react";
import"./useeffect.css"
function UseEffectComponent1(){
    console.log('Component is rerendering...');
    const [data,setData] = useState('');
    useEffect(()=>{
        const fetchData= ()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((user) => user.json())
            .then((user) => setData(user))
            .catch((error)=>{
                console.log("error in fetching data :",error);
            })
            

        }
        fetchData()
    },[])
    return(
        <>
            {data ? (data.map((user)=>{
                return(
                    <div className="box" key={user.id}>
                        <h1>id :{user.id}</h1>
                        <h1>name:{user.name}</h1>
                        <h1>username : {user.username}</h1>
                    </div>
                )

            })):(<h1>loading data...</h1>)}
        </>
    )
}
export default UseEffectComponent1
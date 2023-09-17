import { useState } from "react";
function Hooks(){
    const [cnt,setCnt]=useState(0);
    const [name,setName]=useState('');
    const getCount=()=>{
        setCnt(cnt+1);
    }
    const decre=()=>{
        setCnt(cnt-1);
    }
    if(cnt===-1){
        getCount();
    }
    return(
        <div>
            <h1>React Hooks</h1>
            <p>Count is: {cnt}</p>
            <button onClick={getCount}>Increment By 1</button>
            <button onClick={decre}>Decrement By 1</button><br/>
            <input type="text" onChange={(e)=> setName(e.target.value)}/>
            <p>The name is: {name}</p>
        </div>
    )
}
export default Hooks;
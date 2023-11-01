import { useState } from "react";
function Hooks(){
    const [cnt,setCnt]= useState(0) //const cnt=0;
    const incr=()=>{
        setCnt(cnt+1)
    }
    return(
        <div>
            <h1>React Hooks</h1>
            <p>{cnt}</p>
            <button onClick={incr}>Increment by 1</button>
            {/* {/or we can directly used the usestate method name like below/}
            {/kdfjm/} */}
        </div>
    )
}
export default Hooks
import React,{useEffect} from "react";

function Testeffect(){
    useEffect(()=>{
        console.log("testing");
    },[]);
    return(
        <div>
            <h1>use effects</h1>
        </div>
    )
}
export default Testeffect;
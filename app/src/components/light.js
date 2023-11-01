import { useState } from "react";
function Light(){
    const [lighting,wiring]=useState(false)
    // const [air,filled]=useState(false)
    return(
        <>
        <button onClick={()=>wiring(false)}>OFF</button>
        <button onClick={()=>wiring(true)}>ON</button>
        <br/>
        {
            lighting===true ? <img src="bulb_on.jpeg" alt=""/> : <img src="bulb_off.jpeg" alt=""/>
            
        }
        
        
        {/* <button onClick={()=>filled(false)}>Aired Balloon</button>
        <button onClick={()=>filled(true)}>Airless balloon</button> */}
        <br/>
        
        </>
    )
}
export default Light
// condition ? true statement : false statement
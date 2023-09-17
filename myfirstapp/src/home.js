import React from "react";
// import pic from "./apple.png";
// import img from "./banana.jpeg";
function Home() {
    // const styling={
    //     border:"2px solid black",
    //     width:"200px",
    //     height:"200px",
    //     margin:"10px",
    // };
    //internal styling
    let ss={
        background:"red",
        color:"white",
        marginTop:"100px",//don't use margin-top
    }
    return(
        <div style={ss}>
            <h1>This is my home page</h1>
            {/* <h1 style={{color:"red",fontStyle:"italic",fontVariant:"small-caps"}}>This is my home page</h1>
            <img src={pic} alt="apple" style={styling}></img>
            <img src={img} alt="banana" style={styling}></img> */}
        </div>
    );    
}
export default Home;
const Imageover=()=>{
    const handleImage1=(e)=>{
        console.log("Mouse Overed")
        e.target.style.height="600px";
        e.target.style.width="500px";
    }
    const handleImage2=(e)=>{
        console.log("Mouse Out")
        e.target.style.height="300px";
        e.target.style.width="200px";
        document.body.style.backgroundColor="red" //For applying bagroud color to th
    }
    return(
        <>
            <h2>Image Hovering</h2>
            <img src="logo192.png" alt=" " onMouseOver={handleImage1} onMouseOut={handleImage2}/>
        </>
    )
}
export default Imageover
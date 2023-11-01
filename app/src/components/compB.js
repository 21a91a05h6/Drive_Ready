function CompB(){
    var a=20;
    var b="teju"
    return(
        <>
            <p>This is Component B</p>
            <p>Roll no is <span style={{backgroundColor:"red",color:"white",fontWeight:"bolder"}}>{a}</span></p>
            <p>Name is {b}</p>
        </>
    )
}
export default CompB;
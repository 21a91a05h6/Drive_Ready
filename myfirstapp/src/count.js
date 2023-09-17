function Count(){
    const getName=(n)=>{
       alert(n)
    }
    let name="xyz";
    return(
        <div>
        <button onClick={()=>getName(name)}>Click</button>
    </div>
    );
}
export default Count;
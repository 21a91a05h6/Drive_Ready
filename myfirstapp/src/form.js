import { useState } from "react";
function Form(){
    const [name,setName]=useState('');
    const [rno,setRno]=useState('');
    function handleSubmit(event){
        event.preventDefault();
        console.log(name);
        console.log(rno);
    }
    return(
        <>
            <h1>This is Form Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="firstname" onChange={(e)=> setName(e.target.value)}></input>
                <br/>
                <label>Roll No</label>
                <input type="text" name="rollno" onChange={(e)=>setRno(e.target.value)}></input><br/>
                <input type="submit" name="submit" value="submit"></input>
            </form>
        </>
    )
}
export default Form;
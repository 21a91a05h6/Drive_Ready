import { useState } from "react";
function Form1(){
    const [name,setName]=useState('');
    const [rno,setRno]=useState('');
    const [formData,setFormData]=useState({
        firstname:'',
        rollno:'',
        email:''
    });
    function handleSubmit(event){
        event.preventDefault();
        // console.log(name);
        // console.log(rno);
        console.log(formData);
    }
    return(
        <>
            <h1>This is From1 Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="firstname" value={formData.firstname} onChange={(e) => setFormData({...formData, firstname: e.target.value})}></input>
                <br/>
                <label>Roll No</label>
                <input type="text" name="rollno" value={formData.rollno} onChange={(e) => setFormData({...formData, rollno: e.target.value})}></input><br/>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}></input><br/>
                <input type="submit" name="submit" value="submit"></input>
            </form>
        </>
    )
}
export default Form1;
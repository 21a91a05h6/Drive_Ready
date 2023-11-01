import {useState} from "react";
import axios from "axios";
const Editcourse=()=>{
    const [formdata,setFormdata]=useState({
        'coursename':''
    })
const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(formdata)
    axios.post('http://localhost:5000/addcourse',{formdata}).then((result)=>{console.log(result.body)})
}
return(
    <>
    <form onSubmit={handlesubmit}>
        <label>Course Name:</label>
        {/* <input type="text" name="coursename" onChange={(e)=>setFormdata({...formdata,coursename:e.target.value})}/> */}
        <select name="coursename" onChange={(e)=>setFormdata({...formdata,coursename:e.target.value})}>
            <option>-- select --</option>
            <option>Full Stack</option>
            <option>Azure</option>
            <option>AWS</option>
            <option>Google Flutter</option>
            <option>Data Analytics</option>
        </select>
        <br/>
        <input type="submit" value="update"/>
            <br/>
    </form>
    </>
)
}
export default Editcourse;

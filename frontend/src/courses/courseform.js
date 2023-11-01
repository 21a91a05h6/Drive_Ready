import {useState} from "react";
import axios from "axios";
const Course=()=>{
    const [formdata,setFormdata]=useState({
        'coursename':'',
        'Fee':''
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
        <label>Fee:</label>
        <input type="text" name="fee" onChange={(e)=>setFormdata({...formdata,fee:e.target.value})}/>
        <br/>
        <input type="submit" value="submit"/>
            <br/>
    </form>
    </>
)
}
export default Course;

import {useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Editcourse=()=>{
    const [formdata,setFormdata]=useState({
        'coursename':'',
        'fee':''
    })
    const {id}=useParams()
    //console.log(id);
    useEffect(()=>{
        axios.get('http://localhost:5000/getcoursebyid/'+id)
            .then((res)=>{
            //console.log(res.data.studentdata)
            setFormdata(res.data.cd);
        }).catch((err)=>console.log(err))
    },[]);

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.put('http://localhost:5000/updatecourse/'+id,formdata)
        .then((result)=>{
            alert(result.data.msg)
        })
    }
return(
    <>
    <form onSubmit={handlesubmit}>
        <label>Course Name:</label>
        {/* <input type="text" name="coursename" onChange={(e)=>setFormdata({...formdata,coursename:e.target.value})}/> */}
        <select name="coursename" value={formdata.coursename} onChange={(e)=>setFormdata({...formdata,coursename:e.target.value})}>
            <option>-- select --</option>
            <option>Full Stack</option>
            <option>Azure</option>
            <option>AWS</option>
            <option>Google Flutter</option>
            <option>Data Analytics</option>
        </select>
        <br/>
        <label>Fee:</label>
        <input type="text" name="fee" value={formdata.fee} onChange={(e)=>setFormdata({...formdata,fee:e.target.value})}/>
        <br/>
        <input type="submit" value="update"/>
            <br/>
    </form>
    </>
)
}
export default Editcourse;

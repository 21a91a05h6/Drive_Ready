import {useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Edituser=()=>{
    const[formdata,setFormdata]=useState({
        'email':'',
        'username':'',
        'password':'',
    })
    const {id}=useParams()
    //console.log(id);
    useEffect(()=>{
        axios.get('http://localhost:5000/getuserbyid/'+id)
            .then((res)=>{
            //console.log(res.data.studentdata)
            setFormdata(res.data.usersd);
        }).catch((err)=>console.log(err))
    },[]);

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.put('http://localhost:5000/edituser/'+id,formdata)
        .then((result)=>{
            alert(result.data.msg)
        })
    }
    return(
        <>
        <form onSubmit={handlesubmit}>
            <label>Email:</label>
            <input type="email" name="email" value={formdata.email} onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/>
            <br/>
            <label>Username:</label>
            <input type="text" name="username" value={formdata.username} onChange={(e)=>setFormdata({...formdata,username:e.target.value})}/>
            <br/>
            <label>Password:</label>
            <input type="text" name="password" value={formdata.password} onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/>
            <br/>
            <input type="submit" value="update"/>
            <br/>
        </form>
        </>
    )
}
export default Edituser;
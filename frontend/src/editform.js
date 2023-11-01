import {useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Editform=()=>{
    const[formdata,setFormdata]=useState({
        'name':'',
        'rollno':'',
        'clg':'',
        'branch':'',
    })

    const {id}=useParams()
    //console.log(id);
    useEffect(()=>{
        axios.get('http://localhost:5000/getstudentbyid/'+id)
            .then((res)=>{
            //console.log(res.data.studentdata)
            setFormdata(res.data.students);
        }).catch((err)=>console.log(err))
    },[]);

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.put('http://localhost:5000/updatestudent/'+id,formdata)
        .then((result)=>{
            alert(result.data.msg)
        })
    }
    return(
        <>
        <form onSubmit={handlesubmit}>
            <label>Name</label>
            <input type="text" name="name" value={formdata.name} onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
            <br/>
            {/* <label>Last Name</label>
            <input type="text" name="lname" onChange={(e)=>setFormdata({...formdata,lname:e.target.value})}/>
            <br/> */}
            {/* <label>Email</label>
            <input type="text" name="email" onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/>
            <br/> */}
            {/* <label>Password</label>
            <input type="password" name="pwd" onChange={(e)=>setFormdata({...formdata,pwd:e.target.value})}/>
            <br/>
            <label>Phone Number</label>
            <input type="tel" name="phn" onChange={(e)=>setFormdata({...formdata,phone:e.target.value})}/>
            <br/>
            <label>Gender:</label>
            Male<input type="radio" name="gender" value="male" onChange={(e)=>setFormdata({...formdata,gender:e.target.value})}/>
            Female<input type="radio" name="gender" value="female" onChange={(e)=>setFormdata({...formdata,gender:e.target.value})}/>
            <br/>
            <label>Date of Birth</label>
            <input type="date" name="DOB" onChange={(e)=>setFormdata({...formdata,DOB:e.target.value})}/>
            <br/>
            <label>Age</label>
            <input type="number" name="num" onChange={(e)=>setFormdata({...formdata,age:e.target.value})}/>
            <br/>
            <label>Languages known:</label>
            Telugu<input type="checkbox"  value="telugu" onChange={(e)=>setFormdata({...formdata,lang:e.target.value})}/>
            English<input type="checkbox"  value="english" onChange={(e)=>setFormdata({...formdata,lang:e.target.value})}/>
            Hindi<input type="checkbox"  value="hindi" onChange={(e)=>setFormdata({...formdata,lang:e.target.value})}/>
            <br/>
            <label>College</label>
            <select onChange={(e)=>setFormdata({...formdata,clg:e.target.value})}>
                <option>--select college</option>
                <option>AEC</option>
                <option>ACET</option>
                <option>ACOE</option>
            </select>
            <br/><br/>
            <label>Address</label>
            <textarea onChange={(e)=>setFormdata({...formdata,address:e.target.value})}></textarea>
            <br/> */}
            <label>Roll No:</label>
            <input type="text" name="rollno" value={formdata.rollno} onChange={(e)=>setFormdata({...formdata,rollno:e.target.value})}/>
            <br/>
            <label>College:</label>
            <input type="text" name="clg" value={formdata.clg} onChange={(e)=>setFormdata({...formdata,clg:e.target.value})}/>
            <br/>
            <label>Branch:</label>
            <input type="text" name="branch" value={formdata.branch} onChange={(e)=>setFormdata({...formdata,branch:e.target.value})}/>
            <br/>
            <input type="submit" value="update"/>
            <br/>
        </form>
        </>
    )
}
export default Editform;
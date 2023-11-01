import {useState} from "react";
import axios from "axios";
const UserForm=()=>{
    const[formdata,setFormdata]=useState({
        'email':'',
        'username':'',
        'password':'',
        'myfile':'',
    })
    const handlesubmit=(e)=>{
        const Inputfields=new FormData()
        Inputfields.append("email",formdata.email)
        Inputfields.append("username",formdata.username)
        Inputfields.append("password",formdata.password)
        Inputfields.append("myfile",formdata.myfile)
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/adduser',Inputfields).then((result)=>{console.log(result.body)
        if(result.status==200){
            alert(result.data.msg)
        }
        })
        //window.location.reload()
    }
    return(
        <>
        <form onSubmit={handlesubmit}>
            <label>Email:</label>
            <input type="text" name="email" onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/>
            <br/>
            <label>Username:</label>
            <input type="text" name="username" onChange={(e)=>setFormdata({...formdata,username:e.target.value})}/>
            <br/>
            <label>Password:</label>
            <input type="password" name="password" onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/>
            <br/>
            <label>Upload File:</label>
            <input type="file" name="myfile" onChange={(e)=>setFormdata({...formdata,myfile:e.target.files[0]})}/>
            {/* console.log(e.target.files[0]) */}
            <br/>
            <input type="submit" value="submit"/>
            <br/>
        </form>
        </>
    )
}
export default UserForm;
import {useState} from "react";
import axios from "axios";
const Auth=()=>{
    const[formdata,setFormdata]=useState({
        'uname':'',
        'pass':'',
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/addauth',{formdata}).then((result)=>{console.log(result.body)
        if(result.status==200){
            //alert(result.data.msg)
            window.location.href = '/dashboard';
        }
        else{
            alert(result.data.msg)
        }
    })
    }
    return(
        <>
            <br/>
            <form onSubmit={handlesubmit}>
            
                <label>Username:</label>
                <input type="text" name="uname" placeholder="Username" onChange={(e)=>setFormdata({...formdata,uname:e.target.value})}/><br/><br/>
                <label>Password:</label>
                <input type="text" name="pass" placeholder="Password" onChange={(e)=>setFormdata({...formdata,pass:e.target.value})}/><br/><br/>
                <input type="submit" value="Login"/>
            </form>
        </>
    )
}
export default Auth;
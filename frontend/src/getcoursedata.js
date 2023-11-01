import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';
//import { Link } from "react-router-dom";
const CourseData=()=>{
    let [cd,setCd]=useState([])
    //let api='http://localhost:5000/getstudents';
    useEffect(()=>{
        axios.get('http://localhost:5000/getcourse').then((response)=>{
            console.log(response.data.cd)
            setCd(response.data.cd);
        });
    },[]);

    const handleDelete=(id)=>{
        //alert(id)
        //const api='http://localhost:5000/api/deleteuser/'+id
        axios.delete('http://localhost:5000/api/deletecourse/'+id).then((response)=>{
            console.log(response.data)
            alert("data deleted successfully")
            window.location.reload()
            // if(response.data.message=='Successfully deleted.'){
            //     alert('Deleted successfully.');
            //     window.location.reload();
            // }
        });
    }

    return(
        <>
            <br/>
            <h2>Courses List</h2>
            <table align="center" border={1} cellPadding={1} className='table'>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Course Name</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                </thead>
                {
                    cd && cd.map((ele,index,arr)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{ele.coursename}</td>
                                <td><Link to={`/editcourse/${ele._id}`}><button className="btn btn-warning">Edit</button></Link></td>
                                <td><button className="btn btn-danger" onClick={()=>handleDelete(ele._id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}
export default CourseData;
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import React,{useState,useEffect} from "react";
const Datalist=()=>{
    let [students,setStudents]=useState([])
    //let api='http://localhost:5000/getstudents';
    useEffect(()=>{
        axios.get('http://localhost:5000/getstudents').then((response)=>{
            console.log(response.data.students)
            setStudents(response.data.students);
        });
    },[]);

    const Deletestu=(id)=>{
        console.log(id);
        axios.delete('http://localhost:5000/deletestudent/'+id)
        .then(res=>{console.log(res)
        alert("data deleted successfully")
        window.location.reload()
        })
        .catch(err=>{console.log(err)})
    }
    return(
        <>
            <br/>
            <h2>Trainees List</h2>
            <table align="center" border={1} cellPadding={1} className='table'>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Roll No</th>
                    <th>College</th>
                    <th>Branch</th>
                    <th colSpan={2}>Action</th>
                </tr>
                {
                    students && students.map((ele,index,arr)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.rollno}</td>
                                <td>{ele.clg}</td>
                                <td>{ele.branch}</td>
                                <td><Link to={`/editform/${ele._id}`}><button className='btn btn-warning'>Edit</button></Link></td>
                                <td><button className='btn btn-danger' onClick={()=>Deletestu(ele._id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}
export default Datalist;
import { useEffect } from "react";
import { useParams } from "react-router-dom";

let params =useParams('id');
let edit_userid=params.id;
let api='http://localhost:5000/api/gey-userbyid/'+edit_userid
useEffect(()=>{
    axios.get(api).then((response)=>{
        console.log(response,formdata.users)
        setFormdata(response.formdata.users)
    });
},[]);
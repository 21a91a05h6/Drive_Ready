import { useState,useEffect } from "react";
import axios from "axios";
import { useHref } from "react-router-dom";
function Category(){
    const api="https://fakestoreapi.com/products/categories";
    const [data,setData]=useState([]);
    useEffect(()=>{
        getCategoryList();
    })
    function getCategoryList(){
        axios.get(api).then((response)=>{
        setData(response.data);
        })
    }
    return(
        <>
            <h1>Categories</h1>
            {
                data.map((ele, i)=>{
                    return(
                        <p>{i+1}.{ele}</p>
                    )
                })
            }

        </>
    )
}
export default Category;
import { useState } from "react";
import apple from "./apple.png"
import banana from "./banana.jpeg"
function Array(){
    // let [a,setArr]=useState([10,20,30,40]);
    let [a,setArr]=useState([apple,banana])
    const [fruitname,setFruitName]=useState('');
    const FilterFruits=()=>{
        // console.log(a);
        // console.log(fruitname);
        let filteredarray=a.filter((ele)=>{
            return (ele===fruitname);
        })
        // console.log(filteredarray)
        if(filteredarray.length===0){
            setArr(['apple','banana']);
        }
        else{
            setArr(filteredarray);
        }
    }
    return(
        <div>
            <h1>Fruits Market</h1>
            <input type="text" onChange={(e)=>setFruitName(e.target.value)}/>
            <button onClick={FilterFruits}>Check Fruits</button>
            <br/>
            {/* <ul style={{'display':'inline-block'}}>
                {
                    a.map((ele,i)=>{
                        return(<li key={i}>{ele}</li>)
                    })
                }
            </ul> */}
            {
                a.map((ele,i)=>{
                    return(
                        <img key={i} src={ele} alt="images"></img>
                    )
                })
            }
        </div>
    )
}
export default Array;
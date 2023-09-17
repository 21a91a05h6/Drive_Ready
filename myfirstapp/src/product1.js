import { useEffect,useState } from "react";
import axios from "axios";
import "./product.css";

function Product1(){
    //api request method status-200{success},300{error},400{file not found},(this can be seen in inspect->network->Fetch/XHR)
    //api is an interface this holds the data of various products. fakeapi is a website which have dataserver and it's respective values.
    const api='https://fakestoreapi.com/products';
    const [data,setData]=useState([]);//here data variable is taken as an array.
    const [cnt,setCnt]=useState(0);
    useEffect(()=>{//useEffect changes the value quickly with changing values in code.
        getProductlist();
    },[cnt])//way2 .[]means one time only
    //way1 .without [] means multiple times.
    //way3 .[cnt] means inside the function call based on "cnt" value
    //to get data from server we use either fetch or axios,mostly in react we use axios only.
    const getProductlist=()=>{
        //get methods brings the dat from the server,while the response is used to fill the data from server into data varaiable.
        axios.get(api).then((response)=>{
            // console.log(response.data);
            setData(response.data);
        });
    }
    return(
        <div>
            <p>{cnt}</p>
            <button onClick={()=>setCnt(cnt+1)}>count</button>
            <h1>List of the products</h1>
            <div className="product-list">
            {
                data.map((ele,i)=>{
                return(
                    <div className="card">
                        <img src={ele.image} alt="images"></img>
                        <p key={i}>{ele.title}</p>
                        <p>{ele.price}</p>
                        <p>{ele.category}</p>
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Product1;
import { useEffect,useState } from "react";
import axios from "axios";
import "./product.css";
import Productcard from "./productcard";
//import { Link } from "react-router-dom";
//import Singleproduct from "./singleproduct";

//api-application programming interface, it has get,post,put,delete methods in it.
//get-fetch data from sever-eg:url only
//post-add data to server
//put-update data,based on id we update in the form of object
//delete-deletes data
//in js we use fetch whereas in react we use both fetch and axios, but axios is most preferred
//in axios
//get=>axios.get(api).then(response)
//post=>axios.post(api,{data}).then(response)
//put=>axios.put(api,{record}).then(response)
//delete=>axios.delete(api)
//by using api we get the data in the form of json.
function Product2(){
    //api is an interface this holds the data of various products. fakeapi is a website which have dataserver and it's respective values.
    const api='https://fakestoreapi.com/products';
    const [data,setData]=useState([]);//here data variable is taken as an array.
    const [cnt,setCnt]=useState(0);
    useEffect(()=>{//useEffect changes the value quickly with changing values in code.read and change repeatedly.re-rendering happens with every click on the button, the component gets rendered again and again
        getProductlist();
    },[cnt])//way2 .[]means one time only
    //way1 .without [] means multiple times.
    //way3 .[cnt] means inside the function call based on "cnt" value
    //to get data from server we use either fetch or axios,mostly in react we use axios only.
    const getProductlist=()=>{
        //get methods brings the dat from the server,while the response is used to fill the data from server into data varaiable.
        axios.get(api).then((res)=>{
            // console.log(response.data);
            setData(res.data);
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
                        ///* <Productcard {...ele} key={ele.id}/> */
                        <Productcard res={ele} key={ele.id} />
                        //<Link to={`../singleproduct/${ele.id}`}><img src={ele.image} alt=""/></Link>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Product2;
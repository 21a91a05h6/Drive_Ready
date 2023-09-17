import React, { Component } from "react";
// function About(props) {
//     return(
//         <div style={{background:"black",color:"white"}}>{/*inline styling*/}
//             <h1>This is my about page {props.num}</h1>
//         </div>
//     );   
// }
let stu=[{
    name:"Theju",
    roll:"B3"
}]
export let name="abc";
class about extends Component {
    render(){
        return(
            // <div>
            //     <h1>This is about page with class component {this.props.name}</h1>
            // </div>
            <table border={1} cellSpacing={0}>
                <tr>
                    <th>Name</th>
                    <th>Roll No</th>
                </tr>
                {
                stu.map((ele)=>{
                    return(
                        <tr>
                            <td>{ele.name}</td>
                            <td>{ele.roll}</td>
                        </tr>
                    )
                })
            }
            </table>
        );
    }
}
export default about;
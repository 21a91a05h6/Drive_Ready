import React from "react";
class CompC extends React.Component{
    render(){
        var a="apple is a fruit";
        return(
            <div>
                <h1>This is class component</h1>
                <p>{a}</p>
            </div>
        )
    }
}
export default CompC;
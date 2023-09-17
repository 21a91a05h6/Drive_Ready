import Student from "./student";
function Trainees(){
    let trainees=[{
        name:"Theju ",
        rollno:"B3 ",
        clg:"AEC"
    },
    {
        name:"Deepthi ",
        rollno:"E2 ",
        clg:"AEC"
    }]
    return(
        <div>
            <h2>Trainees List</h2>
            {/* <Student name="Theju" rollno="B3" clg="AEC"/>
            <Student name="Deepthi" rollno="E2" clg="AEC"/> */}
            {
            trainees.map((ele)=>{
                return(
                    <Student name={ele.name} rollno={ele.rollno} clg={ele.clg}/>
                )
            })
            }
            <table style={{border:"1px solid black",cellspacing:"0px"}}>
                <tr>
                    <th style={{border:"1px solid black"}}>Name</th>
                    <th style={{border:"1px solid black"}}>Roll No</th>
                    <th style={{border:"1px solid black"}}>Clg</th>
                </tr>
                {trainees.map((key)=>{
                    return(
                        <tr>
                            <td style={{border:"1px solid black"}}>{key.name}</td>
                            <td style={{border:"1px solid black"}}>{key.rollno}</td>
                            <td style={{border:"1px solid black"}}>{key.clg}</td>
                        </tr>
                    )
                })}
            </table>
            {trainees.map((i)=>{
                return(
                   <div style={{background:"yellow"}}>
                    {i.name}
                    {i.rollno}
                    {i.clg}
                   </div>
                );
            })}
            {/* <table border={1} cellspacing={0} align="center" width={"300px"}>
                <tr><th>S.No</th><th>Name</th><th>Roll No</th></tr>
                {
                    trainees.map((k,j)=>{
                        return(
                            <Student index={j} name={k.name} rollno={k.rollno}/>
                        );
                    })
                }
            </table> */}
            <ul align="left">
                {
                    trainees.map((li)=>{
                        return(
                            <Student name={li.name} rollno={li.rollno} clg={li.clg}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}
export default Trainees;
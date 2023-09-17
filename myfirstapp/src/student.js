function Student(props){//we passed the value from App.js
    //let name='abc';
    return(
        <>
            {/* <tr><td>{props.index+1}</td><td>{props.name}</td><td>{props.rollno}</td></tr> */}
            {/* <h1>Student name is {props.name} {props.rollno} {props.clg}</h1>
            <p>Roll no is {props.rollno}</p>
            <p>Clg is {props.clg}</p> */}
            <li>{props.name}</li>
            <li>{props.rollno}</li>
            <li>{props.clg}</li>
        </>
    )
}
export default Student;
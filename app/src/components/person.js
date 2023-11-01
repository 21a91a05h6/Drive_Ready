function Person(props){
    return(
        <>
            <h1>Person's name is {props.name}</h1>
            <p>Roll no is {props.roll}</p>
            <p>Clg is {props.clg}</p>
            <p>Branch is {props.branch}</p>
        </>
    )
}
export default Person;
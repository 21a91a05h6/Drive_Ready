function List(){
    var a=[{
        name:"teju",
        roll:'B3',
        clg:'aec'
    },
    {
        name:'divya',
        roll:'H6',
        clg:'aec'
    }]
    return(
        <>
        <h1>Student's List</h1>
        <table border={4} cellPadding={0} cellSpacing={0} align="center">
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Roll</th>
                <th>Clg</th>
            </tr>
        {
        a.map((key,i)=>{
            return(
                <tr>
                    <td>{i+1}</td>
                    <td>{key.name}</td>
                    <td>{key.roll}</td>
                    <td>{key.clg}</td>
                </tr>
            )
        })
        }
        </table>
        </>
    )
}
export default List;
function Lists(){
    var c=[
        {
            name:'teju',
            roll:'B3',
            clg:'aec'
        },
        {
            name:'divya',
            roll:'H6',
            clg:'aec'
        }
    ]
    return(
        <>
            {
                c.map((k)=>{
                    return(
                        <>
                        <br/>
                        <ul style={{display:'inline-block'}}>
                            <li>{k.name}</li>
                            <li>{k.roll}</li>
                            <li>{k.clg}</li>
                        </ul>
                        </>
                    )
                })
            }
            <table border={1} cellPadding={0} cellSpacing={0} align="center">
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Roll</th>
                    <th>Clg</th>
                </tr>
                {
                    c.map((o,i)=>{
                        return(
                            <tr>
                                <td>{i+1}</td>
                                <td>{o.name}</td>
                                <td>{o.roll}</td>
                                <td>{o.clg}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}
export default Lists;
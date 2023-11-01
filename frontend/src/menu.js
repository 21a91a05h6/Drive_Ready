import { Link } from "react-router-dom";

function Menu(){
    return(
        <>
            <Link to='form'>Student Form|</Link>
            <Link to='userform'>User Form|</Link>
            <Link to='courseform'>Course Form|</Link>
            <Link to='student'>Get Data|</Link>
            <Link to='user'>Get User Data|</Link>
            <Link to='course'>Get Course Data|</Link>
            <Link to='auth'>Authentication|</Link>
            <Link to='dashboard'>Dashboard</Link>
        </>
    )
}
export default Menu;
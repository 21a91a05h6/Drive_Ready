import { Link } from "react-router-dom";

function Menu(){
    return(
        <>
            <Link to='compA'>Component A|</Link>
            <Link to='compB'>Component B|</Link>
            <Link to='compC'>Component C|</Link>
            <Link to='compD'>Component D|</Link>
            <Link to='image'>Image|</Link>
            <Link to='person'>Person|</Link>
            <Link to='studentList'>List|</Link>
            <Link to='list'>Lists|</Link>
            <Link to='styles'>styles|</Link>
            <Link to='image1'>Image1|</Link>
            <Link to='imageover'>ImageOver|</Link>
            <Link to='light'>Light|</Link>
            <Link to='hooks'>Hooks|</Link>
            <Link to='form'>Form|</Link>
            <Link to='fruitsearch'>Fruit Search</Link>
        </>
    )
}
export default Menu;
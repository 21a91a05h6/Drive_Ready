import { Link } from "react-router-dom";
function Menu(){
    return(
        <div>
            <Link to='/'>Home|</Link>
            <Link to='about'>About|</Link>
            <Link to='services'>Services|</Link>
            <Link to='contact'>Contact|</Link>
            {/* <Link to='student'>Student|</Link> */}
            <Link to='trainees'>Trainees|</Link>
            <Link to='count'>Count|</Link>
            <Link to='hooks'>Hooks|</Link>
            <Link to='array'>Array|</Link>
            <Link to='form'>Form|</Link>
            <Link to='form1'>Form1|</Link>
            <Link to='testeffects'>Test Effects|</Link>
            <Link to='product1'>New products|</Link>
            <Link to='product2'>New Products 2|</Link>
            <Link to='categories'>Category|</Link>
            <Link to='singleproduct'>Single Products|</Link>
            <Link to='dropdown'>Dropdown</Link>
        </div>
    );
}
export default Menu;
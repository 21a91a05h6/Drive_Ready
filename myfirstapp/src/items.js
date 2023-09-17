import { FaHome,FaInfoCircle,FaPhoneAlt,FaUser } from "react-icons/fa";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Services from "./services";
export let menu=[{
    name:"Home",
    icon:<FaHome/>,
    path:'/home',
    element:<Home/>
},
{
    name:"About",
    icon:<FaInfoCircle/>,
    path:'/about',
    element:<About/>
},
{
    name:"Contact",
    icon:<FaPhoneAlt/>,
    path:'contact',
    element:<Contact/>
},
{
    name:"Student",
    icon:<FaUser/>,
    path:'services',
    element:<Services/>
}]
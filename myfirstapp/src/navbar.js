import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { menu } from "./items";
function Nav(){
    return(
        <div>
            <nav>
                {
                    menu.map((ele)=>{
                        return(
                          <>
                            <BrowserRouter>
                                <Routes>
                                    <Route path={ele.path} element={ele.element}></Route>
                                </Routes>
                                <Link to={ele.path}>{ele.icon}{ele.name}</Link>
                            </BrowserRouter>
                          </>  
                        );
                    })
                }
            </nav>
        </div>
    )
}
export default Nav;
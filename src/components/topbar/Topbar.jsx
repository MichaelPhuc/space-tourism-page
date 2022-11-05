import "./topbar.scss"
import { NavLink } from "react-router-dom"

export default function Topbar() {

    return (
        <div className="navbar">

            <img src="assets/shared/logo.svg" alt="Space Logo" className="logo"/>
            
            <div className="nav-rectangle"> 
                <div className="testing">
                    <NavLink to="/" className="nav-text" activeClassName="active"><span>00</span> HOME</NavLink>
                    <NavLink to="/destination" className="nav-text" activeClassName="active"><span>01</span> DESTINATION</NavLink>
                    <NavLink to="/crew" className="nav-text" activeClassName="active"><span>02</span> CREW</NavLink>
                    <NavLink to="/technology" className="nav-text" activeClassName="active"><span>03</span> TECHNOLOGY</NavLink>
                    
                </div>
           
                <hr className="nav-line"/>
            </div>
            
         
           

        </div>

    )
}
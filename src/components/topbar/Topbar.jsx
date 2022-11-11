import "./topbar.scss"
import { NavLink } from "react-router-dom"

export default function Topbar({ menuOpen, setMenuOpen }) {



    return (
        <div className="navbar">

            <img src="assets/shared/logo.svg" alt="Space Logo" className="logo"/>
            
            <div className="nav-rectangle"> 
                <div className="nav-padding">
                    <NavLink to="/" className="nav-text" activeClassName="active"><span>00</span> HOME</NavLink>
                    <NavLink to="/destination" className="nav-text" activeClassName="active"><span>01</span> DESTINATION</NavLink>
                    <NavLink to="/crew" className="nav-text" activeClassName="active"><span>02</span> CREW</NavLink>
                    <NavLink to="/technology" className="nav-text" activeClassName="active"><span>03</span> TECHNOLOGY</NavLink>
                </div>
                <hr className="nav-line"/>
            </div>

            {/* Hamburger menu for mobile */}
            <div className={"hamburger-bar " + (menuOpen && "active")}>
                <div className="wrapper">
                    <div className="left">
                    </div>
                    <div className="right">
                        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                    </div>
                </div>
            </div>
         
           

        </div>

    )
}
import "./menu.scss"
import { NavLink } from "react-router-dom"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <NavLink to="/" className="menu-text" activeClassName="active"><span>00</span> HOME</NavLink>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <NavLink to="/destination" className="menu-text" activeClassName="active"><span>01</span> DESTINATION</NavLink>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <NavLink to="/crew" className="menu-text" activeClassName="active"><span>02</span> CREW</NavLink>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <NavLink to="/technology" className="menu-text" activeClassName="active"><span>03</span> TECHNOLOGY</NavLink>
                </li>
                
            </ul>
        </div>
    )
}
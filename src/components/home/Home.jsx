import "./home.scss"
import { NavLink } from "react-router-dom"

export default function Home() {

    return (
    
    <div className="home">
        <div className="left">
           
            <NavLink to="/destination" ><button className="explore">EXPLORE</button></NavLink>
            <div className="home-text">
                <h5>SO, YOU WANT TO TRAVEL TO</h5>
                <h1>SPACE</h1>
                <p className="body-text">
                Let's face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we'll give you a truly out of this world experience!
                </p>
            </div>
        </div>
    </div>
      
    )
}
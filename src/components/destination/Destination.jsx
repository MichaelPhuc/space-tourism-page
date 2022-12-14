import "./destination.scss"
import Tabs from "../tabs/Tabs";


export default function Destination() {

    return (
        <div className="destination">
            <div className="left">
                <h5><small>01</small> PICK YOUR DESTINATION</h5>
            </div>
            <div className="right"> 
                <Tabs>
                    <div label="MOON">
                        <h2>MOON</h2>
                        <img src="assets/destination/image-moon.png" alt="The Moon" className="destination-pic"/>
                        <p className="body-text">
                            See our planet as you've never seen it before. A perfect relaxing trip away to help 
                            regain perspective and come back refreshed. While you're there, take in some history 
                            by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>
                        <hr className="destination-line"></hr>
                        <div className="distance">
                            <p className="sh2">AVG. DISTANCE</p>
                            <h4>384,400 KM</h4>
                        </div>
                        <div className="time">
                            <p className="sh2">EST. TRAVEL TIME</p>
                            <h4>3 DAYS</h4>
                        </div>                     
                    </div>
                    <div label="MARS">
                        <h2>MARS</h2>
                        <img src="assets/destination/image-mars.png" alt="Mars" className="destination-pic"/>
                        <p className="body-text">
                            Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, 
                            the tallest planetary mountain in our solar system. It's two and a half times 
                            the size of Everest!
                        </p>
                        <hr className="destination-line"></hr>
                        <div className="distance">
                            <p className="sh2">AVG. DISTANCE</p>
                            <h4>225 MIL. KM</h4>
                        </div>
                        <div className="time">
                            <p className="sh2">EST. TRAVEL TIME</p>
                            <h4>9 MONTHS</h4>
                        </div>    
                    </div>
                    <div label="EUROPA">
                        <h2>EUROPA</h2>
                        <img src="assets/destination/image-europa.png" alt="Europa" className="destination-pic"/>
                        <p className="body-text">
                            The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                            winter lover's dream. With an icy surface, it's perfect for a bit of 
                            ice skating, curling, hockey, or simple relaxation in your snug 
                            wintery cabin.
                        </p>   
                        <hr className="destination-line"></hr>
                        <div className="distance">
                            <p className="sh2">AVG. DISTANCE</p>
                            <h4>628 MIL. KM</h4>
                        </div>
                        <div className="time">
                            <p className="sh2">EST. TRAVEL TIME</p>
                            <h4>3 YEARS</h4>
                        </div>            
                    </div>
                    <div label="TITAN">
                        <h2>TITAN</h2>
                        <div className="divtext">
                        </div>
                        <img src="assets/destination/image-titan.png" alt="Titan" className="destination-pic"/>
                        <p className="body-text">
                            The only moon known to have a dense atmosphere other than Earth, Titan 
                            is a home away from home (just a few hundred degrees colder!). As a 
                            bonus, you get striking views of the Rings of Saturn.
                        </p>
                        <hr className="destination-line"></hr>
                        <div className="distance">
                            <p className="sh2">AVG. DISTANCE</p>
                            <h4>225 BIL. KM</h4>
                        </div>
                        <div className="time">
                            <p className="sh2">EST. TRAVEL TIME</p>
                            <h4>7 YEARS</h4>
                        </div>    
                    </div>
                </Tabs>      
            </div>
        </div>

    )
}
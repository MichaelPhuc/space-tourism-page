import "./destination.scss"

export default function Destination() {

    return (
        <div className="destination">
            <div className="left">
                <div>
                <h5><span>01</span> PICK YOUR DESTINATION</h5>
                </div>
                
                    
                <img src="assets/destination/image-moon.png" alt="The Moon" className="moon"/>
            </div>
            <div className="right">
                
                 <div>
                    

                Moon
                Mars
                Europa
                Titan

                Moon
                <p className="destination-text">
                    See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                    regain perspective and come back refreshed. While you’re there, take in some history 
                    by visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                Avg. distance
                384,400 km

                Est. travel time
                3 days
             
                </div>   
            </div>
        </div>

    )
}
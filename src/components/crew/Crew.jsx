import "./crew.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

export default function Crew() {

    return (
        <div className="crew">
            
            <div className="left">
                <h5><span>02</span> MEET YOUR CREW</h5>
                <Swiper 
                
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                  }}
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                    el: '.swiper-custom-pagination',
                  }} 
                modules={[Pagination, Autoplay]} 
                className="mySwiper"
                >
                   <div className="swiper-custom-pagination">

                   </div>
                    <SwiperSlide>
                    
                        <div className="crew-text">
                        <h4>COMMANDER</h4>
                        <h3>DOUGLAS HURLEY</h3>
                            
                        <p className="body-text">
                            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                            and former NASA astronaut. He launched into space for the third time as 
                            commander of Crew Dragon Demo-2.
                        </p>
                    
                        </div>
                        <img src="assets/crew/image-douglas-hurley.png" alt="Douglas Hurley" className="crew-douglas"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="crew-text">
                        <h4>MISSION SPECIALIST</h4>
                        <h3>MARK SHUTTLEWORTH</h3>
                            
                        <p className="body-text">
                            Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
                            the Linux-based Ubuntu operating system. Shuttleworth became the first South 
                            African to travel to space as a space tourist.
                        </p>
                    
                        </div>
                        <img src="assets/crew/image-mark-shuttleworth.png" alt="Mark Shuttleworth" className="crew-mark"/>
                        </SwiperSlide>
                    <SwiperSlide>
                        <div className="crew-text">
                        <h4>PILOT</h4>
                        <h3>VICTOR GLOVER</h3>
                            
                        <p className="body-text">
                            Pilot on the first operational flight of the SpaceX Crew Dragon to the 
                            International Space Station. Glover is a commander in the U.S. Navy where 
                            he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
                            station systems flight engineer. 
                        </p>
                    
                        </div>
                        <img src="assets/crew/image-victor-glover.png" alt="Victor Glover" className="crew-victor"/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="crew-text">
                        <h4>FLIGHT ENGINEER</h4>
                        <h3>ANOUSHEH ANSARI</h3>
                            
                        <p className="body-text">
                            Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                            Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                            fly to the ISS, and the first Iranian in space. 
                        </p>
                    
                        </div>
                        <img src="assets/crew/image-anousheh-ansari.png" alt="Anousheh Ansari" className="crew-anousheh"/>
                        </SwiperSlide>
                </Swiper>
                
               
            </div>
           
            <div className="right">
                
            </div>
       
        </div>

    )
}
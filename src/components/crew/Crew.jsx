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
                /*
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                  }}
                  */
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
                        <h4>COMMANDER</h4>
                        <h3>DOUGLAS HURLEY</h3>
                            
                        <p className="body-text">
                            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                            and former NASA astronaut. He launched into space for the third time as 
                            commander of Crew Dragon Demo-2.
                        </p>
                    
                        </div>
                        <img src="assets/crew/image-mark-shuttleworth.png" alt="Mark Shuttleworth" className="crew-mark"/>
                        </SwiperSlide>
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
                        <img src="assets/crew/image-victor-glover.png" alt="Victor Glover" className="crew-victor"/>
                    </SwiperSlide>
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
                        <img src="assets/crew/image-anousheh-ansari.png" alt="Anousheh Ansari" className="crew-anousheh"/>
                        </SwiperSlide>
                </Swiper>
                
               
            </div>
           
            <div className="right">
                
            </div>
       
        </div>

    )
}
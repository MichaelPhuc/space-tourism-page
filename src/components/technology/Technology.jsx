import "./technology.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

export default function Technology() {

    return (
        <div className="crew">
            
            <div className="left">
                <h5><span>02</span> MEET YOUR CREW</h5>
                <Swiper
                    pagination={{
                    dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="Swiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    
                </Swiper>
               
            </div>
           
            <div className="right">
                
            </div>
       
        </div>

    )
}
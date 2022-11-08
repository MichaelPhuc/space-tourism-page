import "./technology.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

export default function Technology() {

    return (
        <div className="technology">
            
            <div className="left">
                <h5><span>03</span> SPACE LAUNCH 101</h5>
                <Swiper
                    direction={"vertical"}
                    pagination={{
                        clickable: true,
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
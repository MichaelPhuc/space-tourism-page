import "./technology.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { EffectFade, Pagination } from "swiper";

export default function Technology() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<h4 class="' + className + '">' + (index + 1) + "</h4>";
        },
      };
    
    return (
        <div className="technology">
            <div className="left">
                <h5><span>03</span> SPACE LAUNCH 101</h5>
                <Swiper
                    effect={"fade"}
                    fadeEffect={{
                        crossFade: true,
                    }}
                    pagination={pagination}
                    modules={[EffectFade, Pagination]}
                    className="Swiper"
                >
                    <SwiperSlide>
                        <img src="assets/technology/image-launch-vehicle-portrait.jpg" alt="Launch Vehicle" className="technology-image"/>
                        <img src="assets/technology/image-launch-vehicle-landscape.jpg" alt="Launch Vehicle Landscape" className="technology-image-landscape"/>
                        <div className="technology-text">
                            <p className="terminology">THE TERMINOLOGY...</p>
                            <h3>LAUNCH VEHICLE</h3>
                            <p className="body-text">
                            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                            payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                            it's quite an awe-inspiring sight on the launch pad!
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="assets/technology/image-spaceport-portrait.jpg" alt="Spaceport" className="technology-image"/>
                        <img src="assets/technology/image-spaceport-landscape.jpg" alt="Spaceport Landscape" className="technology-image-landscape"/>
                        <div className="technology-text">
                            <p className="terminology">THE TERMINOLOGY...</p>
                            <h3>SPACEPORT</h3>
                            <p className="body-text">
                            A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                            by analogy to the seaport for ships or airport for aircraft. Based in the 
                            famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                            of the Earth's rotation for launch.
                            </p>
                        </div>    
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="assets/technology/image-space-capsule-portrait.jpg" alt="Space Capsule" className="technology-image"/>
                        <img src="assets/technology/image-space-capsule-landscape.jpg" alt="Space Capsule Landscape" className="technology-image-landscape"/>
                        <div className="technology-text">
                            <p className="terminology">THE TERMINOLOGY...</p>
                            <h3>SPACE CAPSULE</h3>
                            <p className="body-text">
                            A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                            capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                            you'll spend your time during the flight. It includes a space gym, cinema, 
                            and plenty of other activities to keep you entertained.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    )
}
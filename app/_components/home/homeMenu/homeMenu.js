"use client"

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import categoriesData from "/app/_api/menu.json";


function Homemenu() {
    const categories = categoriesData.menu;

    const handleSlideChange = (swiper) => {

    };

    return (
        <div className="swiper-container-main">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}

                centeredSlides={true}
                loop={true}
                slidesPerView={3} // Show fewer slides initially for performance
                speed={500} // Adjust animation speed if needed
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
                onSlideChange={handleSlideChange}
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className="slide-with-gradient" >
                        <Link href={`/menu/${category.link}`}>
                            <div className="swiper-slide-content">

                                <img src={`${category.category_photo}`} alt={`Slide ${index}`} />
                              <div className="swiper-text-container">
                                  <h1 className="">{category.category_name}</h1>
                              </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Homemenu;

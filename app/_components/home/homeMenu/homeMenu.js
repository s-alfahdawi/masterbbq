"use client"

import Link from "next/link";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import categoriesData from '/app/_api/menu.json'

import {EffectCoverflow, Pagination, Navigation} from 'swiper';


function Homemenu() {
    const categories = categoriesData.menu;

    return (
        <div className="swiper-container-main">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={5}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{el: '.swiper-pagination', clickable: true}}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={category.id}>
                        <Link href={`/menu/${category.link}`}>
                            <div className="swiper-slide-content">
                                <img src={`/images/${category.category_photo}`} alt={`Slide ${index}`}/>
                                <h1 className="">{category.category_name}</h1>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Homemenu;
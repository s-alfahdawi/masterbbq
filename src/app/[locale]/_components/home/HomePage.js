import menuData from "@/src/app/[locale]/_api/menu.json"; // Assuming menu.json has a default export
import {general_photos} from "@/src/app/[locale]/_api/photos.json";
import Hero from "@/src/app/[locale]/_components/home/hero/Hero";
import HomeMenu from "@/src/app/[locale]/_components/home/homeMenu/homeMenu";

import VideoComponent from "@/src/app/[locale]/_components/home/video/Video";
import Carousel from "@/src/app/[locale]/_components/home/carousel/Carousel";
import {statics} from "@/src/app/[locale]/_api/statics.json";
import Contact from "@/src/app/[locale]/_components/home/contact-info/Contact";
import Specials from "@/src/app/[locale]/_components/home/specials/specials";
import Image from "next/image";

export default function HomePage() {
    return (
        <div className="">

            <Hero/>
            <HomeMenu categories={menuData}/>
            <Specials/>
            <Carousel/>
            <VideoComponent/>
            <Contact/>
        </div>
    );
}

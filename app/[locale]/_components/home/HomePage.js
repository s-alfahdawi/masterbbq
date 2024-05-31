import menuData from "../../_api/menu.json"; // Assuming menu.json has a default export
import Carousel from "./carousel/Carousel";
import Contact from "./contact-info/Contact";
import Hero from "./hero/Hero";
import Homemenu from "./homeMenu/homeMenu";
import Specials from "./specials/specials";
import VideoComponent from "./video/Video";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <Homemenu categories={menuData} />
      <Specials />
      <Carousel />
      <VideoComponent />
      <Contact />
    </div>
  );
}

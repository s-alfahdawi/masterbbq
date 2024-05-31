
import Banner from "@/src/app/[locale]/_components/layout/Header/Banner";
import Navbar from "@/src/app/[locale]/_components/layout/Header/Navbar";

export default function Header() {
    return (
        <div className="">
            <Banner/>
            <Navbar/>
        </div>
    );
}
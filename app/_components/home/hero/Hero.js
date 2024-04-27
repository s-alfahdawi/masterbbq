
import Link from "next/link";

export default function Hero() {
    return (
        <main className="">
            <div className="hero" style={{backgroundImage: 'url(/images//DSC06405.webp)', minHeight: '450px'}}>
                <div className="hero-overlay bg-black bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5  text-7xl text-white font-bold noto-nashk-font ">
                            طعم <span className="spannn">لا يقاوم</span>
                        </h1>

                        <div className="flex flex-col mt-5 items-center">
                            <Link href="/menu"
                                  className="bg-primary mt-2 font-semibold  text-white text-lg px-8 menu-button   rounded-full  flex items-center">
                                عرض المنيو

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

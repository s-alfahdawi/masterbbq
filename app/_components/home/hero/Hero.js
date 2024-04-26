
import Link from "next/link";

export default function Hero() {
    return (
        <main className="">
            <div className="hero" style={{backgroundImage: 'url(/images/gallery/14.jpg)', minHeight: '450px'}}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5  text-7xl text-white font-bold noto-nashk-font ">
                            طعم <span className="spannn">لا يقاوم</span>
                        </h1>

                        <div className="flex flex-col items-center">
                            <Link href="/menu"
                                  className="bg-primary font-semibold text-white text-md px-8 py-3  rounded-full  flex items-center">
                                عرض المنيو

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

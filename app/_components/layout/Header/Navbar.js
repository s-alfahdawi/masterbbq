"use client"
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <main className="">
            <div className="navbar bg-base-100 flex px-5 items-center justify-between">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">

                        <details className="dropdown">
                            <summary className="m-2 language">العربية</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li>
                                    <Link className="text-gray-500 hover:text-white" href="https://en.masterbbqerbil.net/">
                                        English
                                    </Link>

                                </li>
                                <li>
                                    <Link className="text-gray-500 hover:text-white" href="https://masterbbqerbil.info">
                                        کوردی
                                    </Link>
                                </li>
                            </ul>
                        </details>

                        <li><Link href="https://wa.me/9647727072244" target="_blank" rel="noopener noreferrer">احجز
                            طاولة</Link></li>
                        <li><Link href="/menu">المنيو</Link></li>
                        <li><Link href="/">الرئيسية</Link></li>

                    </ul>
                </div>
                <div className="flex items-center">
                    <Image
                        src="/images/1.webp"
                        alt="hero image"
                        width={70}
                        height={70}
                    />
                </div>
            </div>
        </main>
    );
}


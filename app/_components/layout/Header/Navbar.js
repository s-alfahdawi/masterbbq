// "use client";
//
// import Image from "next/image";
// import Link from "next/link";
//
// export default function Navbar() {
//     return (
//         <main className="">
//
//             <div className="navbar bg-base-100 ">
//
//                 <div className="flex-none">
//                     <ul className="menu menu-horizontal px-1">
//                         <li><Link href="/">home</Link></li>
//                         <li><Link href="/menu">menu</Link></li>
//                         <li><Link href="https://wa.me/9647505072244" target="_blank" rel="noopener noreferrer">book a
//                             table</Link></li>
//                         <li><Link href="/">language</Link></li>
//                     </ul>
//                 </div>
//                 <div className="flex-1">
//                     <Image
//                         src="/images/photo2.png"
//                         alt="hero image"
//                         width={70}
//                         height={70}
//                     />
//
//                 </div>
//             </div>
//
//         </main>
//     );
// }
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <main className="">
            <div className="navbar bg-base-100 flex px-5 items-center justify-between">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className="text-gray-500 language"  href="/">اللغة</Link></li>

                        <li><Link href="https://wa.me/9647727072244" target="_blank" rel="noopener noreferrer">احجز
                            طاولة</Link></li>
                        <li><Link href="/menu">المنيو</Link></li>
                        <li><Link href="/">الرئيسية</Link></li>

                    </ul>
                </div>
                <div className="flex items-center">
                    <Image
                        src="/images/1.png"
                        alt="hero image"
                        width={70}
                        height={70}
                    />
                </div>
            </div>
        </main>
    );
}


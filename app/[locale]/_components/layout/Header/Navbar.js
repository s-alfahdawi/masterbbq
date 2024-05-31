"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import LocaleSwitcher from "../../locale-switcher";

export default function Navbar() {
  const { locale } = useParams();

  return (
    <main className="">
      <div className="navbar bg-base-100 flex px-5 items-center justify-between">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <LocaleSwitcher />
            </li>
            <li>
              <Link
                href="https://wa.me/9647727072244"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === "en" ? "Reserve a Table" : "احجز طاولة"}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/menu`}>
                {locale === "en" ? "Menu" : "المنيو"}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}`}>
                {locale === "en" ? "Home" : "الرئيسية"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <Image src="/images/1.webp" alt="hero image" width={70} height={70} />
        </div>
      </div>
    </main>
  );
}

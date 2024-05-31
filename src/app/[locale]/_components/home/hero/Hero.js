"use client"
import Link from "next/link";
import {useTranslations} from "next-intl";
import { useParams } from 'next/navigation';
export default function Hero() {
    const t = useTranslations('statics');
    const keys = ['hero' ];
    const {locale} = useParams();

    // const meat=useTranslations('meat');
    return (
        <main className="">
            <div className="hero" style={{backgroundImage: 'url(/images//DSC06405.webp)', minHeight: '450px'}}>
                <div className="hero-overlay bg-black bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        {/*{t('title')}*/}
                        {/*{meat('price')}*/}
                        <p className="mb-5  lg:text-7xl md:text-7xl sm-font-5xl text-white  font-bold noto-nashk-font ">
                            {t('hero.title')}

                            <br/>

                        </p>

                        <div className="flex flex-col mt-5 items-center">
                            <Link href={`/${locale}/menu`}
                                  className="bg-primary mt-2 font-semibold  text-white text-lg px-8 menu-button   rounded-full  flex items-center">
                                {t('hero.button')}

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

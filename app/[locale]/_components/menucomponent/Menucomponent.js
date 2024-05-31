"use client"
import {useState, useEffect} from 'react';
import Link from 'next/link';
import {  useTranslations } from "next-intl";
import { useParams } from 'next/navigation';
const Menu = () => {
    const {locale} = useParams();
    const keys = ['salads', 'cold_appetizers', 'hot_appetizers','Grill', 'Ribs', 'cow','brisket','smoked','oriental_food','box','burger','american_pizza','kids_meals','sweets', 'cold-drinks', 'hot-drinks'];
    const t = useTranslations('categories');

    return (
        <div className="mt-10">
            <div className="hero-content  w-full ml-auto mr-auto text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-white font-bold">قائمة الطعام</h1>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-center pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 md:gap-y-10 gap-y-10">

                        {keys.map((key) => (
                            <div key={key} className="card bg-base-100 shadow-xl max-w-md mx-auto">
                                <Link href={`/${locale}/${t(`${key}.link`)}`} >

                                    <figure className="px-10 pt-10">
                                        <img
                                            src={t(`${key}.category_photo`)}
                                            alt={t(`${key}.category_name`)}
                                            className="rounded-xl card-img object-cover"
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{t(`${key}.category_name`)}</h2>
                                    </div>
                                </Link>


                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Menu;



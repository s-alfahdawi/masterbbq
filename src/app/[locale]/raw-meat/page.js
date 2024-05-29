"use client";

import { useState } from "react";
import { NextIntlClientProvider, useTranslations } from "next-intl";

const Menu = ({ params: { locale } }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = (image) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setIsOpen(false);
    };

    const handleModalClick = (e) => {
        e.stopPropagation(); // Prevent modal closing when clicking inside modal content
    };

    const keys = ['1', '2', '3','4', '5', '6','7', '8', '9'];
    const t = useTranslations('meat');
    console.log(keys);

    return (
        // <NextIntlClientProvider locale={locale}>
            <div className="mt-10">
                <div className="hero-content w-full ml-auto mr-auto text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-white font-bold">{t('title')}</h1>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="flex justify-center pt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-40 gap-x-30 md:gap-x-20 gap-y-10">
                            {keys.map((key) => (
                                <div key={key} className="card bg-base-100 shadow-xl max-w-md mx-auto">
                                    <figure className="px-10 pt-10 cursor-pointer" onClick={() => handleOpenModal(t(`${key}.photo`))}>
                                        <img src={t(`${key}.photo`)} alt={t(`${key}.name`)} className="rounded-xl card-img" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title title-rtl">{t(`${key}.name`)}</h2>
                                        <p className="description">{t(`${key}.description`)}</p>
                                        <div className="card-actions">
                                            <button disabled className="btn btn-primary">{t(`${key}.price`)}</button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black bg-opacity-40" onClick={handleCloseModal}>
                        <div className="max-w-md p-4 bg-base-100 rounded-lg" onClick={handleModalClick}>
                            <img src={selectedImage} alt="Selected" className="w-full h-auto" />
                        </div>
                    </div>
                )}
            </div>
        // </NextIntlClientProvider>
    );
};

export default Menu;


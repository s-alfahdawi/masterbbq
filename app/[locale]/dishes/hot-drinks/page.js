"use client";

import { promises as fs } from 'fs';
import { useState } from "react";
import { useTranslations } from "next-intl";

export default async function HotAppetizers() {
  const keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];
  const t = useTranslations("hot-drinks");

  const file = await fs.readFile(process.cwd() + '../../_api/menu.json', 'utf8');
  const data = JSON.parse(file);
  
  const HotdrinksCategory = data.find(
    (category) => category.category_id === "8"
  );
  
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

  if (HotdrinksCategory) {
    return (
      <div>
        <div className="">
          <div
            className="hero"
            style={{
              backgroundImage: `url(${HotdrinksCategory.category_photo})`,
              minHeight: "450px",
            }}
          >
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl text-white font-bold">
                  {HotdrinksCategory.category_name}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-40 gap-x-30 md:gap-x-20 gap-y-10">
              {keys.map((key) => (
                <div
                  key={key}
                  className="card bg-base-100 shadow-xl max-w-md mx-auto"
                >
                  <figure
                    className="px-10 pt-10 cursor-pointer"
                    onClick={() => handleOpenModal(t(`${key}.photo`))}
                  >
                    <img
                      src={t(`${key}.photo`)}
                      alt={t(`${key}.name`)}
                      className="rounded-xl card-img"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title title-rtl">{t(`${key}.name`)}</h2>
                    <div className="card-actions">
                      <button disabled className="btn btn-primary">
                        {t(`${key}.price`)}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isOpen && (
          <div
            className="fixed top-0 right-0 bottom-0 md-modal left-0 flex sm:w-30 md:w-30 z-50 justify-center items-center bg-black bg-opacity-40"
            onClick={handleCloseModal}
          >
            <div
              className="max-w-md p-4 bg-base-100  rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return <h1>Category not found</h1>;
  }
}

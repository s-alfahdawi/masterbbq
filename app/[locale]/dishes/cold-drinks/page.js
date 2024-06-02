"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { promises as fs } from 'fs';


export default async function ColdDrinks() {
  const c = useTranslations("categories");
  const categoryKey = ["cold-drinks"];
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
  ];
  const t = useTranslations("ميلك شيك");
  const keys_fresh = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const f = useTranslations("العصائر الطبيعية");
  const keys_m = ["1", "2", "3", "4", "5"];
  const m = useTranslations("الموهيتو");
  const keys_s = ["1", "2", "3", "4"];
  const s = useTranslations("سموذي");
  const keys_l = ["1", "2", "3", "4"];
  const l = useTranslations("لاتيه");
  const keys_g = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const g = useTranslations("المشروبات الغازية");
  const keys_master = [
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
  ];
  const master = useTranslations("ماستر");
  const keys_a = ["1", "2", "3"];
  const a = useTranslations("المشروبات الامريكية");
  const keys_e = ["1", "2", "3", "4", "5"];
  const e = useTranslations("مشروبات الطاقة");


  const file = await fs.readFile(process.cwd() + '../../_api/menu.json', 'utf8');
  const data = JSON.parse(file);

  const coldDrinksCategory = data.find(
    (category) => category.category_id === "7"
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

  if (coldDrinksCategory) {
    const { subcategories } = coldDrinksCategory;

    return (
      <div>
        <div className="">
          <div
            className="hero"
            style={{
              backgroundImage: `url(${c(`${categoryKey}.category_photo`)})`,
              minHeight: "450px",
            }}
          >
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl text-white font-bold">
                  {c(`${categoryKey}.category_name`)}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div>
            <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-400 text-center">
              {t(name)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-20">
              {keys.map((key) => (
                <div
                  key={key}
                  className="card bg-base-100 shadow-xl max-w-md mx-auto"
                >
                  <div className="grid grid-cols-1 gap-4">
                    <div
                      key={key}
                      className="flex flex-col items-center justify-center"
                    >
                      <figure className="px-10 pt-10">
                        <img
                          src={t(`${key}.photo`)}
                          alt={t(`${key}.name`)}
                          className="rounded-xl card-img object-cover cursor-pointer"
                          onClick={() => handleOpenModal(t(`${key}.photo`))} // Pass the actual image URL
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title title-rtl">
                          {t(`${key}.name`)}
                        </h2>
                        <div className="card-actions">
                          <button disabled className="btn btn-primary">
                            {t(`${key}.price`)}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-400 text-center">
              {f(name)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-20">
              {keys_fresh.map((key) => (
                <div
                  key={key}
                  className="card bg-base-100 shadow-xl max-w-md mx-auto"
                >
                  <div className="grid grid-cols-1 gap-4">
                    <div
                      key={key}
                      className="flex flex-col items-center justify-center"
                    >
                      <figure className="px-10 pt-10">
                        <img
                          src={f(`${key}.photo`)}
                          alt={f(`${key}.name`)}
                          className="rounded-xl card-img object-cover cursor-pointer"
                          onClick={() => handleOpenModal(f(`${key}.photo`))} // Pass the actual image URL
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title title-rtl">
                          {f(`${key}.name`)}
                        </h2>
                        <div className="card-actions">
                          <button disabled className="btn btn-primary">
                            {f(`${key}.price`)}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-400 text-center">
              {m(name)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-20">
              {keys_m.map((key) => (
                <div
                  key={key}
                  className="card bg-base-100 shadow-xl max-w-md mx-auto"
                >
                  <div className="grid grid-cols-1 gap-4">
                    <div
                      key={key}
                      className="flex flex-col items-center justify-center"
                    >
                      <figure className="px-10 pt-10">
                        <img
                          src={m(`${key}.photo`)}
                          alt={m(`${key}.name`)}
                          className="rounded-xl card-img object-cover cursor-pointer"
                          onClick={() => handleOpenModal(m(`${key}.photo`))} // Pass the actual image URL
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title title-rtl">
                          {m(`${key}.name`)}
                        </h2>
                        <div className="card-actions">
                          <button disabled className="btn btn-primary">
                            {m(`${key}.price`)}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-400 text-center">
              {s(name)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-20">
              {keys_s.map((key) => (
                <div
                  key={key}
                  className="card bg-base-100 shadow-xl max-w-md mx-auto"
                >
                  <div className="grid grid-cols-1 gap-4">
                    <div
                      key={key}
                      className="flex flex-col items-center justify-center"
                    >
                      <figure className="px-10 pt-10">
                        <img
                          src={s(`${key}.photo`)}
                          alt={s(`${key}.name`)}
                          className="rounded-xl card-img object-cover cursor-pointer"
                          onClick={() => handleOpenModal(s(`${key}.photo`))} // Pass the actual image URL
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title title-rtl">
                          {s(`${key}.name`)}
                        </h2>
                        <div className="card-actions">
                          <button disabled className="btn btn-primary">
                            {s(`${key}.price`)}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-400 text-center">
              {l(name)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-20">
              {keys_l.map((key) => (
                <div
                  key={key}
                  className="card bg-base-100 shadow-xl max-w-md mx-auto"
                >
                  <div className="grid grid-cols-1 gap-4">
                    <div
                      key={key}
                      className="flex flex-col items-center justify-center"
                    >
                      <figure className="px-10 pt-10">
                        <img
                          src={l(`${key}.photo`)}
                          alt={l(`${key}.name`)}
                          className="rounded-xl card-img object-cover cursor-pointer"
                          onClick={() => handleOpenModal(l(`${key}.photo`))} // Pass the actual image URL
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title title-rtl">
                          {l(`${key}.name`)}
                        </h2>
                        <div className="card-actions">
                          <button disabled className="btn btn-primary">
                            {l(`${key}.price`)}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-400 text-center">
              {g(name)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-20">
              {keys_g.map((key) => (
                <div
                  key={key}
                  className="card bg-base-100 shadow-xl max-w-md mx-auto"
                >
                  <div className="grid grid-cols-1 gap-4">
                    <div
                      key={key}
                      className="flex flex-col items-center justify-center"
                    >
                      <figure className="px-10 pt-10">
                        <img
                          src={g(`${key}.photo`)}
                          alt={g(`${key}.name`)}
                          className="rounded-xl card-img object-cover cursor-pointer"
                          onClick={() => handleOpenModal(g(`${key}.photo`))} // Pass the actual image URL
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title title-rtl">
                          {g(`${key}.name`)}
                        </h2>
                        <div className="card-actions">
                          <button disabled className="btn btn-primary">
                            {g(`${key}.price`)}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-400 text-center">
              {master(name)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-20">
              {keys_master.map((key) => (
                <div
                  key={key}
                  className="card bg-base-100 shadow-xl max-w-md mx-auto"
                >
                  <div className="grid grid-cols-1 gap-4">
                    <div
                      key={key}
                      className="flex flex-col items-center justify-center"
                    >
                      <figure className="px-10 pt-10">
                        <img
                          src={master(`${key}.photo`)}
                          alt={master(`${key}.name`)}
                          className="rounded-xl card-img object-cover cursor-pointer"
                          onClick={() =>
                            handleOpenModal(master(`${key}.photo`))
                          } // Pass the actual image URL
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title title-rtl">
                          {master(`${key}.name`)}
                        </h2>
                        <div className="card-actions">
                          <button disabled className="btn btn-primary">
                            {master(`${key}.price`)}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-400 text-center">
              {a(name)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-20">
              {keys_a.map((key) => (
                <div
                  key={key}
                  className="card bg-base-100 shadow-xl max-w-md mx-auto"
                >
                  <div className="grid grid-cols-1 gap-4">
                    <div
                      key={key}
                      className="flex flex-col items-center justify-center"
                    >
                      <figure className="px-10 pt-10">
                        <img
                          src={a(`${key}.photo`)}
                          alt={a(`${key}.name`)}
                          className="rounded-xl card-img object-cover cursor-pointer"
                          onClick={() => handleOpenModal(a(`${key}.photo`))} // Pass the actual image URL
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title title-rtl">
                          {a(`${key}.name`)}
                        </h2>
                        <div className="card-actions">
                          <button disabled className="btn btn-primary">
                            {a(`${key}.price`)}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-400 text-center">
              {e(name)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-20">
              {keys_e.map((key) => (
                <div
                  key={key}
                  className="card bg-base-100 shadow-xl max-w-md mx-auto"
                >
                  <div className="grid grid-cols-1 gap-4">
                    <div
                      key={key}
                      className="flex flex-col items-center justify-center"
                    >
                      <figure className="px-10 pt-10">
                        <img
                          src={e(`${key}.photo`)}
                          alt={e(`${key}.name`)}
                          className="rounded-xl card-img object-cover cursor-pointer"
                          onClick={() => handleOpenModal(e(`${key}.photo`))} // Pass the actual image URL
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title title-rtl">
                          {e(`${key}.name`)}
                        </h2>
                        <div className="card-actions">
                          <button disabled className="btn btn-primary">
                            {e(`${key}.price`)}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isOpen && (
          <div
            className="fixed top-0 right-0 bottom-0 left-0 flex z-50 justify-center items-center bg-black bg-opacity-40"
            onClick={handleCloseModal}
          >
            <div
              className="max-w-md p-4 bg-base-100 rounded-lg"
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

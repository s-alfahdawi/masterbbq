
"use client";

import { useTranslations } from "next-intl";

export default function Shisha() {

  const t = useTranslations("shisha");
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const s = useTranslations("categories");
  const categoryKey = ["shisha"];

  return (<div>test</div>)

    return (
      <div>
        <div className="">
          <div
            className="hero"
            style={{
              backgroundImage: `url(${s(`${categoryKey}.category_photo`)})`,
              minHeight: "450px",
            }}
          >
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl text-white font-bold">
                {s(`${categoryKey}.category_name`)}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4  py-8">
          <div className="grid grid-cols-1 gap-4 md:gap-1 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ml-auto mr-auto lg:gap-x-40 gap-x-30 md:gap-x-10 gap-y-10">
              {keys.map((subcategory) => (
                  <div key={subcategory.id} className="max-w-xl">
                    <div className="card bg-base-100 shadow-xl mx-auto">
                      <div className="image-container">
                        <figure className="px-10 pt-10">
                          <img
                            src={`${subcategory.photo}`}
                            alt={subcategory.name}
                            className="rounded-xl  object-cover"
                          />
                        </figure>

                        <div className="card-body">
                          <div className="ml-auto mr-auto">
                            {" "}
                            <h2 className="card-title mb-4 card-title-start text-center">
                              {subcategory.name}
                            </h2>
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                            {subcategory.shishas &&
                              subcategory.shishas.map((shisha) => (
                                <div
                                  key={shisha.id}
                                  className="flex justify-between items-center py-2 border-b border-dashed border-gray-800"
                                >
                                  <h3 className="text-lg font-medium">
                                    {shisha.name}
                                  </h3>
                                  <h3>{shisha.price}</h3>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
}

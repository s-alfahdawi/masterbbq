// import { menu } from "@/app/_api/menu.json";
// import React from "react";
//
// export default function Shisha() {
//     const shishaCategory = menu.find((category) => category.category_id === "9");
//
//     if (shishaCategory) {
//         const { subcategories } = shishaCategory;
//
//         return (
//             <div>
//                 <div className="">
//                     <div className="hero" style={{ backgroundImage: `url(/images/${shishaCategory.category_photo})`, minHeight: "450px" }}>
//                         <div className=""></div>
//                         <div className="hero-content text-center text-neutral-content">
//                             <h1 className="mb-5 text-5xl text-white font-bold">{shishaCategory.category_name}</h1>
//
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container mx-auto px-2 py-2">
//                     <div className="grid grid-cols-1 gap-4">
//                         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-20">
//
//                             {subcategories && subcategories.map((subcategory) => (
//                                 <div className="max-w-xl">
//                                     <div key={subcategory.id} className="card bg-base-100 shadow-xl mx-auto">
//                                         <div className="image-container">
//                                             <figure className="px-10 pt-10">
//                                                 <img
//                                                     src={`/images/${subcategory.photo}`}
//                                                     alt={subcategory.name}
//                                                     className="rounded-xl card-img object-cover"
//                                                 />
//                                             </figure>
//                                             <div className="card-body items-center text-center">
//                                                 <h2 className="card-title">{subcategory.name}</h2>
//                                                 <div className="grid grid-cols-1 gap-4">
//                                                     {subcategory.shishas && subcategory.shishas.map((shisha) => (
//                                                         <div key={shisha.id} className="flex justify-between items-center py-2 border-b border-dashed border-gray-800">
//                                                             <h3 className="text-lg font-medium">{shisha.name}</h3>
//                                                             <h3>{shisha.price}</h3>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     } else {
//         return <h1>Category not found</h1>;
//     }
// }


import {menu} from "@/app/_api/menu.json";


export default function Shisha() {

    const shishaCategory = menu.find((category) => category.category_id === "9");

    if (shishaCategory) {
        const {subcategories} = shishaCategory;

        return (
            <div>
                <div className="">
                    <div className="hero"
                         style={{backgroundImage: `url(/images/${shishaCategory.category_photo})`, minHeight: "450px"}}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl text-white font-bold">{shishaCategory.category_name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-20">
                            {subcategories && subcategories.map((subcategory) => (
                                <div key={subcategory.id} className="max-w-xl">
                                    <div className="card bg-base-100 shadow-xl mx-auto">
                                        <div className="image-container">
                                            <figure className="px-10 pt-10">
                                                <img
                                                    src={`/images/${subcategory.photo}`}
                                                    alt={subcategory.name}
                                                    className="rounded-xl  object-cover"
                                                />
                                            </figure>

                                            <div className="card-body">
                                                <h2 className="card-title mb-4 text-center">{subcategory.name}</h2>
                                                <div className="grid grid-cols-1 gap-4">
                                                    {subcategory.shishas && subcategory.shishas.map((shisha) => (
                                                        <div key={shisha.id} className="flex justify-between items-center py-2 border-b border-dashed border-gray-800">
                                                            <h3 className="text-lg font-medium">{shisha.name}</h3>
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
    } else {
        return <h1>Category not found</h1>;
    }
}

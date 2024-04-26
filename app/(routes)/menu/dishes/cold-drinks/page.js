// import {menu} from "@/app/_api/menu.json";
//
//
// export default function ColdDrinks() {
//     // Find the category with id=1 (Box Meal)
//     const ColdDrinksCategory = menu.find((category) => category.category_id === "7");
//
//     if (ColdDrinksCategory) {
//         return (
//             <div>
//                 <div className="">
//                     <div className="hero"
//                          style={{backgroundImage: `url(/images/${ColdDrinksCategory.category_photo})`, minHeight: '450px'}}>
//                         <div className=""></div>
//                         <div className="hero-content text-center text-neutral-content">
//                             <div className="max-w-md">
//                                 <h1 className="mb-5 text-5xl text-white font-bold">{ColdDrinksCategory.category_name}</h1>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container mx-auto px-4 py-8">
//                     <div className="flex justify-center pt-10">
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-20">
//                             {ColdDrinksCategory.dishes.map((dish) => (
//                                 <div key={dish.id} className="card bg-base-100 shadow-xl max-w-md mx-auto">
//                                     <figure className="px-10 pt-10">
//                                         <img
//                                             src={`/images/${dish.photo}`}
//                                             alt={dish.name}
//                                             className="rounded-xl card-img object-cover "
//                                         />
//
//                                     </figure>
//                                     <div className="card-body items-center text-center">
//                                         <h2 className="card-title">{dish.name}</h2>
//                                         <p>{dish.description}</p>
//                                         <div className="card-actions">
//                                             <button disabled className="btn btn-primary">{dish.price}</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//
//             </div>
//         );
//     } else {
//         return <h1>Category not found</h1>;
//     }
// }


import {menu} from "@/app/_api/menu.json";

export default function ColsDrinks() {
    // Find the category with id=7 (Cold Drinks)
    const coldDrinksCategory = menu.find((category) => category.category_id === "7");

    if (coldDrinksCategory) {
        const {subcategories} = coldDrinksCategory;

        return (
            <div>
                <div className="">
                    <div className="hero" style={{
                        backgroundImage: `url(/images/${coldDrinksCategory.category_photo})`,
                        minHeight: "450px"
                    }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl text-white font-bold">{coldDrinksCategory.category_name}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {subcategories && subcategories.map((subcategory) => (
                    <div className="container mx-auto px-4 py-8">
                        <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-400 text-center">{subcategory.name}</h2>

                        <div className="flex justify-center pt-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-20">
                                {subcategory.drinks && subcategory.drinks.map((drink) => (
                                <div key={subcategory.id} className="card bg-base-100 shadow-xl max-w-md mx-auto">
                                    <div className="grid grid-cols-1 gap-4">

                                            <div key={drink.id} className="flex flex-col items-center justify-center">
                                                <figure className="px-10 pt-10">
                                                    <img
                                                        src={`/images/${drink.photo}`}
                                                        alt={drink.name}
                                                        className="rounded-xl card-img object-cover"
                                                    />
                                                </figure>
                                                <div className="card-body items-center text-center">
                                                    <h2 className="card-title title-rtl">{drink.name}</h2>
                                                    <div className="card-actions">
                                                        <button disabled
                                                                className="btn btn-primary">{drink.price}</button>
                                                    </div>
                                                </div>
                                            </div>


                                    </div>

                                </div> ))}
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        );
    } else {
        return <h1>Category not found</h1>;
    }
}

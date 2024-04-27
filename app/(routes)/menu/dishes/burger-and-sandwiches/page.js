import {menu} from "@/app/_api/menu.json";
import Image from "next/image";

export default function Pizza() {
    // Find the category with id=1 (Box Meal)
    const BurgerCategory = menu.find((category) => category.category_id === "12");


    if (BurgerCategory) {
        return (
            <div>
                <main className="">
                    <div className="hero"
                         style={{backgroundImage: `url(${BurgerCategory.category_photo})`, minHeight: '450px'}}>

                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl text-white font-bold">{BurgerCategory.category_name}</h1>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="container mx-auto px-4 py-8">
                    <div className="flex justify-center pt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-40 gap-y-20">
                            {BurgerCategory.dishes.map((dish) => (
                                <div key={dish.id} className="card bg-base-100 shadow-xl max-w-md mx-auto">
                                    <figure className="px-10 pt-10">
                                        <img src={`${dish.photo}`} alt={dish.name} className="rounded-xl card-img" />

                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title title-rtl">{dish.name}</h2>
                                        <p className="description">{dish.description}</p> {/* Add a class to the description paragraph */}
                                        <div className="card-actions">
                                            <button disabled className="btn btn-primary">{dish.price}</button>
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

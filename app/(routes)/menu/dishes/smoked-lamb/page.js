import {menu} from "@/app/_api/menu.json";
import Image from "next/image";

export default function SmokedLamb() {

    const SmokedlambCategory = menu.find((category) => category.category_id === "15");

    if (SmokedlambCategory) {
        return (
            <div>
                <div className="">
                    <div className="hero"
                         style={{backgroundImage: `url(${SmokedlambCategory.category_photo})`, minHeight: '450px'}}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl text-white font-bold">{SmokedlambCategory.category_name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-8">
                    <div className="flex justify-center pt-10">
                        <div className="grid  md:grid-cols-2 lg:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-20">
                            {SmokedlambCategory.dishes.map((dish) => (
                                <div key={dish.id} className="card bg-base-100 shadow-xl max-w-md mx-auto">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src={`${dish.photo}`}
                                            alt={dish.name}
                                            className="rounded-xl card-img object-cover "
                                        />


                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title title-rtl">{dish.name}</h2>
                                        <p className="description">{dish.description}</p>
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

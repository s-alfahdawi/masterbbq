import { meat } from "@/app/_api/rawmeat.json";
import Link from "next/link";
import React from "react";

const Rawmeat = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-white font-bold">اللحم النيء</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-center pt-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-20 md:gap-y-10 gap-y-20">
                        {meat.map((rawmeat) => (
                            <div key={rawmeat.id} className="card bg-base-100 shadow-xl max-w-md mx-auto">
                                <div className="image-container">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src={`/images/${rawmeat.photo}`}
                                            alt={rawmeat.name}
                                            className="rounded-xl card-img object-cover"
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title title-rtl">{rawmeat.name}</h2>
                                        <h2 className="card-title ">{rawmeat.price}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rawmeat;

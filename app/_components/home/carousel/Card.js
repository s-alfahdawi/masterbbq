"use client"
import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {TbCircleArrowUpRight} from "react-icons/tb";
import Link from "next/link";

const Card = (props) => {

    const {image} = props;
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <Link href={`/gallery`}>
            <motion.div style={{cursor: "pointer"}}
                        className="relative overflow-hidden h-[200px] min-w-[200px] bg-slate-400 flex justify-center items-center"
                        key={image}
                        onHoverStart={() => setShowOverlay(true)}
                        onHoverEnd={() => setShowOverlay(false)}
            >
                {/* Hover overlay */}
                <AnimatePresence>
                    {showOverlay && (
                        <motion.div
                            className="absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >

                            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full"/>
                            <motion.h1
                                className="bg-primary font-semibold text-white text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] "
                                initial={{y: 10}}
                                animate={{y: 0}}
                                exit={{y: 10}}
                            >

                                <span>
                                 <Link href={`/gallery`}>  Explore more</Link>
                            </span><TbCircleArrowUpRight/>


                                {/*<Arrow className="h-4 w-4" />*/}
                            </motion.h1>
                        </motion.div>
                    )}
                </AnimatePresence>

                <img src={image} alt="test" style={{objectFit: "cover", width: "100%", height: "100%"}}/>


            </motion.div>
        </Link>
    );
};

export default Card;

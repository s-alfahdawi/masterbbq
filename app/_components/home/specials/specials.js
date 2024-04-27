import Image from "next/image"
import photo1 from "/public/images/wd2.jpg"
import photo2 from "/public/images/wdcopy.jpg"
import Link from "next/link";
import {meat} from "@/app/_api/rawmeat.json";


export default function Specials() {
    return (

        <div className="flex specials justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20 md:gap-10 ">
                <div className="flex justify-center">
                    <div className="ribbon-container">
                        <div className="image-container">
                            <Image src={photo2} alt="specials" className='rounded-[15px]' width={400} height={200}/>

                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="ribbon-container">
                        <div className="image-container">
                            <Image src={photo1} alt="Original Photo" className='rounded-[15px] soon '  width={400}
                                   height={200}/>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

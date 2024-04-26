import Image from "next/image"
import photo1 from "/public/images/wd2.jpg"
import photo2 from "/public/images/wdcopy.jpg"
import Link from "next/link";
import {meat} from "@/app/_api/rawmeat.json";
import soon from "/public/images/soon.png"

export default function Specials() {
    return (

        <div className="flex specials justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10 sm:gap-2">
                <div className="flex justify-center">
                    <div className="ribbon-container">
                        <div className="image-container">
                            <Image src={photo1} alt="Original Photo" className='rounded-[20px] soon' width={350}
                                   height={200}/>

                        </div>
                    </div>
                </div>

            <div className="flex justify-center">
                <div className="ribbon-container">
                    <div className="image-container">
                        <Image src={photo2} alt="specials" className='rounded-[20px]' width={350} height={200}/>

                    </div>
                </div>
            </div>
        </div>
</div>
    )
}

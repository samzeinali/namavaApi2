'use client'

import Image from "next/image";
import Search from "@/public/icons/search-line.svg";

export default function SearchBox () {
    return (
        <div>
            <Image className="w-[28px] h-[30px] cursor-pointer mt-[2px] ml:ml-[8px] tab:h-[28px]   tab:ml-[11px] des:w-[38px] des:h-[38px]" src={Search} alt="search"/>
        </div>
    )
}


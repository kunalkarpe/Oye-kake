"use client"

import Image from "next/image"
import Logo from "../images/logo.webp"
import Link from "next/link"
import { usePathname } from "next/navigation"

const TABS = [
    {
        id: 1,
        name: "Menu",
        path: "/menu"
    },
    {
        id: 2,
        name: "About Us",
        path: "/about-us"
    },
    {
        id: 3,
        name: "Location",
        path: "/location"
    },
    {
        id: 4,
        name: "Reservation",
        path: "/reservation"
    },
]

const Navbar = () => {
    const pathName = usePathname()
    return (
        <div className="flex border justify-between items-center h-14 px-4 bg-white z-30 sticky top-0 right-0 left-0">
            <div className="flex gap-1 justify-center items-center">

                <Image alt="logo.jpg" src={Logo} className="h-12 w-12" />
                <h1 className="font-bold text-primary text-xl">OYE KAKE</h1>
            </div>
            <div className="flex items-center gap-8">
                {TABS?.map((tabUnit, index) => {
                    const isActive = tabUnit?.path?.includes(pathName)
                    return (
                        <Link href={tabUnit?.path} key={tabUnit?.id} className={`font-semibold text-sm ${index === 3 && " ring-1 ring-primary bg-primary text-white rounded-sm py-1 px-2 "} ${isActive && "border-b-2 border-primary text-primary"} `} >{tabUnit?.name}</Link>

                    )
                })}
            </div>
        </div>
    )
}

export default Navbar

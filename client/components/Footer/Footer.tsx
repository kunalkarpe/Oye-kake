
import { Facebook, icons, Instagram, Mail, MapPin, Motorbike, Phone, Pin } from "lucide-react";
import { p } from "motion/react-client";
import Link from "next/link";

const LOCATIONS = [

    {
        id: 2,
        name: "Fort",
        address: "Shop No, 13, Cawasji Patel Rd, beside Yazdhani Bakery, Kala Ghoda, Fort, Mumbai, Maharashtra 400001"
    },
    {
        id: 3,
        name: "Hyderabad",
        address: "Shop No 2, Unit 2, Gate no. 11, Phase 1, SALARPURIA SATTVA KNOWLEDGE CITY, Sy.no, 83/1, beside T-Hub, Hyderabad, Telangana 500081"

    },
    {
        id: 1,
        name: "Ghatkopar",
        address: 'R City Mall, Lal Bahadur Shastri Rd, Amrut Nagar, Ghatkopar West, Mumbai, Maharashtra 400086'
    },
]

const CONTACT = [
    {
        id: 1,
        icons: <Mail className="size-4 text-red-400" />,
        ref: "enquiry@oyekakerestaurants.com"
    },
    {
        id: 2,
        icons: <Phone className="size-4 text-green-400" />,
        ref: "9063579996 /  9769408182 / 9619006666 / 9619496666 "
    },
]
export default function Footer() {
    return (
        <div className="mt-4 flex flex-col">
            <div className="h-4 bg-offWhite w-full" />
            <div className="flex flex-col  bg-lightGray text-offWhite h-full pt-10  w-full">

                <div className="flex h-72 px-2 justify-around">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl text-secondary font-bold">Oye Kake</h1>
                        <div className="flex flex-col gap-2 text-sm w-96">

                            <p >It is a brand that specializes in vegetarian Punjabi food, known for offering traditional flavors from Amritsar in Mumbai. </p>

                            <p>The brand just like its name serves comfort and traditional flavours of Amritsar in the heart of Mumbai.</p>
                            <p>What we present is detailed research on magnificent streets of the culinary capital of Punjab, serving irresistible delicacies.</p>
                        </div>
                        <div className="flex gap-2 justify-start">

                            <Link href={"https://www.instagram.com/oyekake/?hl=en"} target="_blank" className="p-1"  ><Instagram className="size-5 text-white hover:text-secondary" />  </Link>

                            <Link href={"https://www.facebook.com/oyekakemumbai/"} target="_blank" className="p-1"   ><Facebook className="size-5   text-white hover:text-secondary" /></Link>
                            <Link href={"https://www.zomato.com/mumbai/restaurants/oye-kake"} target="_blank" className="p-1"   ><Motorbike className="size-5   text-white hover:text-secondary" /></Link>
                        </div>
                    </div>

                    {/* Outlets */}
                    <div className=" flex-col gap-2 flex">
                        <p className="text-secondary font-semibold text-lg w-full ">Outlets</p>
                        <div className="flex flex-col gap-3">
                            {LOCATIONS?.map((locUnit) => {
                                return (
                                    <div className="flex flex-col gap-1" key={locUnit?.id}>
                                        <p className="text-sm font-semibold" >
                                            {locUnit?.name}
                                        </p>
                                        <div className="flex items-start text-xs   gap-1 w-145 text-wrap h-9  border-white" >
                                            <p className=""><MapPin className="size-4  text-red-400" /></p>
                                            <p>
                                                {locUnit?.address}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>

                    {/* Contact us */}
                    <div className="flex flex-col gap-4">
                        <p className="text-secondary font-semibold text-lg w-full ">Contact us </p>
                        <div className="flex flex-col gap-2 font-semibold">
                            {CONTACT?.map((conUnit) => {
                                return (
                                    <div key={conUnit?.id} className="flex gap-2 items-center text-xs">
                                        <p>{conUnit?.icons}</p>
                                        <p>{conUnit?.ref}</p>
                                    </div>
                                )
                            })}
                        </div>

                        <Link href={"/reservation"} className="underline-offset-2 underline font-semibold" > Reservation</Link>
                        <Link href={"/about-us"} className="underline-offset-2 underline font-semibold" > About Us</Link>

                    </div>

                </div >


            </div>
            {/* Footer */}
            <div className="flex border-t text-center justify-center bg-secondary/90 p-2 gap-4 text-xl font-serif border-secondary">
                {/* <p>All Rights Reserved</p> */}
                <p>
                    © Owned By Golden Ladle Hospitality
                </p>
            </div>
        </div>
    )
}

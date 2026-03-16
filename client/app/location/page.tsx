"use client"
import Image from "next/image"
import Ghatkopar from "../../components/images/Ghatkopar.webp"
import LowerParel from "../../components/images/Lower Parel.webp"
import Fort from "../../components/images/Fort.webp"
import Hyderabad from "../../components/images/Hyderabad.jpg"
import { ArrowRight, Map, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"

const LOCATION = [
    {
        id: 1,
        name: "Ghatkopar",
        address: "R City Mall, Lal Bahadur Shastri Rd, Amrut Nagar, Ghatkopar West, Mumbai, Maharashtra 400086",
        img: Ghatkopar
    },
    {
        id: 2,
        name: "Lower Parel",
        address: "Restaurant 2 & 3 First Floor, Bombay Hub Z – Wing Kamala City, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013",
        img: LowerParel
    },
    {
        id: 3,
        name: "Fort",
        img: Fort,
        address: "Shop No, 13, Cawasji Patel Rd, beside Yazdhani Bakery, Kala Ghoda, Fort, Mumbai, Maharashtra 400001"
    },
    // {
    //     id: 4,
    //     name: "Santacruz",
    //     address: "Shop no 12, santacruz mansion 1 Sen Nagar, Santacruz East, opp. santacruz, station (east), Mumbai, Maharashtra 400055"
    // },
    {
        id: 5,
        name: "Hyderabad",
        img: Hyderabad,
        address: "Shop No 2, Unit 2, Gate no. 11, Phase 1, SALARPURIA SATTVA KNOWLEDGE CITY, Sy.no, 83/1, beside T-Hub, Hyderabad, Telangana 500081"
    },
]

const Location = () => {
    const router = useRouter()

    const handleClick = () => {
        router.push("/reservation")
    }
    return (
        <div className="h-fit w-full gap-4 flex flex-col py-4    ">
            <p className="text-center font-bold text-gray-500">LOCATIONS</p>
            <div className="flex flex-col items-center gap-8 px-4">

                {LOCATION?.map((locUnit, index) => {
                    return (
                        <div key={locUnit?.id} className={`flex ${index % 2 !== 0 && "flex-row-reverse  ms-30"} me-20  ring-1 ring-gray-200 h-52 items-center justify-between w-5/6 rounded-lg gap-8 px-6  shadow-md`}>
                            <div className="flex flex-col gap-8">
                                <div className="flex-col flex gap-2">

                                    <h1 className={"text-primary font-semibold text-md uppercase underline"}>{locUnit?.name}</h1>

                                    <p className="text-sm font-semibold flex gap-1 w-5/6"><MapPin className="size-5 fill-red-500 text-white " /> {locUnit?.address}</p>
                                </div>
                                <div className={`flex w-full  gap-4`}>

                                    <button className=" flex items-center justify-center gap-2 ring-1 ring-primary text-white bg-primary w-44 rounded-full h-10 hover:cursor-pointer" onClick={handleClick}>
                                        Book Table <ArrowRight className="size-4 text-white" />
                                    </button>
                                    <button className=" flex items-center justify-center gap-2 ring-1 ring-secondary text-secondary   w-44 rounded-full h-10 hover:cursor-pointer">
                                        View on Map <Map className="size-4 text-secondary" />
                                    </button>
                                </div>
                            </div>



                            <div className="relative w-72 h-40 ">
                                {/* Top-left border piece - shifted slightly up */}
                                <div className={`absolute -top-2 -left-2 w-full h-full border-l-4 border-t-4 ${index % 2 === 0 ? "border-primary " : "border-primary"} rounded-sm z-10`} />

                                {/* Bottom-right border piece - shifted slightly down */}
                                <div className={`absolute -bottom-2 -right-2 w-full h-full border-r-4 border-b-4 ${index % 2 === 0 ? "border-secondary " : "border-secondary"} rounded-sm z-10`} />

                                {/* Image centered */}
                                <Image src={locUnit?.img} alt="location.img" className="relative z-20 w-full h-full object-cover rounded-sm" />

                            </div>

                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Location

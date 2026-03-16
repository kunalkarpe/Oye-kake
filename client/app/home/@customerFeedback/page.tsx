"use client"
import Image from "next/image"
import man1 from "../../../components/images/man1.png"
import man2 from "../../../components/images/man2.png"
import man3 from "../../../components/images/man3.png"
import women1 from "../../../components/images/women1.png"
import { Quote, Star } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
const FEEDBACKS = [
    {
        id: 1,
        feedback: "Few months back we had visited Oye Kake Ghatkopar outlet and we totally loved it hence we thought of giving this restaurant  another try and visited Lower Parel branch  it too made way it's way to our heart. Oye Kake is probably one of the best restaurant out there serving finest quality pure veg food. Talking about the ambience it's quite pretty and looks elegant. The best part here which I love the most is the serving plates and other few elements which uplifts the dining experience.",
        name: "Vedant Lad",
        img: man1,
        star: 4
    },
    {
        id: 2,
        feedback: "Amazing food with a nice ambience. A perfect place to fill your cravings for North Indian food. We had Bun Tikki, mix Veg Paratha which came with Dal Makhani and Dahi, Paneer Makhani. The food served was delicious and they also had a prompt service.",
        name: "Trevler Clerver",
        img: man2,
        star: 5
    },
    {
        id: 3,
        feedback: "Oye Kake is a place to fulfil all your big hunger, worth visiting for all Punjabi items. All the Punjabi dishes are a must-try over here, especially the lassi and buttermilk",
        name: "NIsha B",
        img: women1,
        star: 5
    },
    {
        id: 4,
        feedback: "The food was amazing, even though the menu options were limited. However, everything on the menu was of high quality and offered great value for money.",
        name: "Ankur thakre",
        img: man3,
        star: 4

    }
]

const CustomerFeedback = () => {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            slidesToScroll: 2
        },

        [Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false })]
    )
    return (
        <div className="flex flex-col gap-4 p-4 h-96 w-full items-center justify-center">
            <h1 className="text-2xl font-semibold">Customer Feedback</h1>
            <div className="overflow-hidden w-full" ref={emblaRef}>
                <div className="flex  w-full  p-4 gap-4">
                    {FEEDBACKS?.map((feedUnit) => {
                        return (
                            <div className=" flex-[0_0_50%] flex justify-between p-4 ring-1 ring-primary/10 shadow-md shadow-primary/20 rounded-lg h-64 w-160" key={feedUnit?.id}>
                                <div className="flex flex-col gap-4 relative w-full px-2">
                                    <Quote className="size-6 text-primary fill-primary rotate-180 outline-none" />
                                    <p className="text-xs font-semibold">{feedUnit?.feedback}</p>
                                    <div className="flex flex-col absolute right-0 bottom-0">
                                        <p className="text-end text-primary text-sm font-semibold">{feedUnit?.name}</p>
                                        <div className="flex justify-end">
                                            {Array?.from({ length: feedUnit?.star })?.map((_, i) => {
                                                return (
                                                    <Star className="text-amber-300 size-4 fill-amber-300" key={i} />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                {/* Image */}
                                <div className=" p-2 rounded-full bg-white">
                                    <div className="relative w-56 h-56">
                                        <Image src={feedUnit?.img}
                                            alt="Profile"
                                            className="absolute h-56 pl-2  rounded-full object-cover "
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div >
    )
}

export default CustomerFeedback

import Image from 'next/image'
import Food1 from "../../components/images/food1.webp"
import Owner from "../../components/images/owner.png"
import GuruSeva from "../../components/images/gurusevatali.webp"


const AboutUs = () => {
    return (
        <div className='flex flex-col gap-8  px-4 py-2'>
            <p className='text-center text-lightGray underline underline-offset-2 font-bold text-lg'>About Us</p>

            {/* Pankaj Gupta owner */}
            <div className="flex justify-around items-center">
                <div className="relative w-72 h-72 ">
                    {/* Top-left border piece - shifted slightly up */}
                    <div className={`absolute -top-2 -left-2 w-full h-full border-l-4 border-t-4 border-primary rounded-sm z-10`} />

                    {/* Bottom-right border piece - shifted slightly down */}
                    <div className={`absolute -bottom-2 -right-2 w-full h-full border-r-4 border-b-4 border-secondary  rounded-sm z-10`} />

                    {/* Image centered */}
                    <Image alt='owner' src={Owner} className="relative z-20 w-full h-full object-cover rounded-sm" />

                </div>
                <div className="flex flex-col gap-2 text-sm font-semibold  italic  w-2/3">
                    <p className='text-xl font-semibold underline underline-offset-2 text-primary'>Pankaj Gupta</p>
                    <p className=' '>Owner, restaurateur, and marketer amongst several others, Pankaj Gupta, Owner of Oye Kake and Taftoon Bar & Kitchen, has donned several hats in the past decade. With two successful restaurant brands, he has surely proven that Mumbai is indeed the city of dreams if you dare to dream big. A foodie at heart, Pankaj’s biggest inspiration for flavours came from watching his own mother in the kitchen and the flavours she brought to the table. Following several failed attempts at breaking an egg to make himself breakfast as a young boy, Pankaj realized that cooking involved more than just tossing ingredients together in a pan. After graduating with a degree in Retail and Marketing, he was offered a role at a leading bank in 2011, which he politely declined. Instead, he took time off to travel back to the city of Amritsar which had given him several fond memories of the past.</p>
                    <p>A trip that was meant to be just for a few days, lasted three months and gave Pankaj the ammunition for his next steps after realizing the lack of vegetarian Punjabi food in Mumbai. Hence, despite having no background or connections in the F&B industry in Mumbai, he started working on his plans to bring Amritsar’s renowned yet humble Chole Kulcha to the city of Mumbai. In 2011, Pankaj launched the city’s first Oye Kake, the regional vegetarian Punjabi restaurant brand under the parent company – Flavour Pot Foods L.L.P. Fuelled by his passion, he also contributed to creating marketing USPs which included bringing in water from Amritsar to knead the kulcha dough. Since its inception, Oye Kake has expanded across the city with several outlets and delivery kitchens, with a few more in the pipeline. Driven by the vision to bring new experiences to the table, Pankaj launched Taftoon Bar & Kitchen in November 2017, which gave Mumbaikars the chance to sample unexplored dishes from the regions of Kabul through to Chittagong, also known as the Grand Trunk Road.</p>
                </div>
            </div>

            {/* Food */}

            <div className="flex   gap-4 justify-around items-center">
                <div className="flex flex-col gap-2 text-sm font-semibold  italic w-2/3">

                    <p className='text-primary font-semibold text-lg underline underline-offset-2'>Thoughts</p>
                    <p className='text-sm font-semibold text-lightGray italic   '>Can food transport us back to a beloved place with just a bite? We believe it can! At Oye Kake, we want to invoke the feeling of belonging and nostalgia that only good soul food can. Vegetarian Punjabi Food – this niche, but in demand space has been one that Oye Kake has dominated over the years. The brand just like its name serves comfort and traditional flavours of Amritsar in the heart of Mumbai. What we present is detailed research on magnificent streets of the culinary capital of Punjab, serving irresistible delicacies. With the perfect amalgamation of Amritsari flavours and vibe, our food will not only teleport you to those streets but will also want you to come back, again and again, to turn your casual affair of vegetarian food into a long-term romance. Join this journey with us where you can experience the streets of Amritsar from Mumbai.</p>
                </div>
                <div className="relative w-72 h-60 ">
                    {/* Top-left border piece - shifted slightly up */}
                    <div className={`absolute -top-2 -left-2 w-full h-full border-l-4 border-t-4 border-primary rounded-sm z-10`} />

                    {/* Bottom-right border piece - shifted slightly down */}
                    <div className={`absolute -bottom-2 -right-2 w-full h-full border-r-4 border-b-4 border-secondary  rounded-sm z-10`} />

                    {/* Image centered */}
                    <Image src={Food1} alt="food.img" className="relative z-20 w-full h-full object-cover rounded-sm" />

                </div>
            </div>

            {/* Guru seva thali */}
            <div className="flex  h-56 gap-4 justify-around items-center">
                <div className="relative w-72 h-64 ">
                    {/* Top-left border piece - shifted slightly up */}
                    <div className={`absolute -top-2 -left-2 w-full h-full border-l-4 border-t-4 border-primary rounded-sm z-10`} />

                    {/* Bottom-right border piece - shifted slightly down */}
                    <div className={`absolute -bottom-2 -right-2 w-full h-full border-r-4 border-b-4 border-secondary  rounded-sm z-10`} />

                    {/* Image centered */}
                    <Image alt='gurusevathali' src={GuruSeva} className="relative z-20 w-full h-full object-cover rounded-sm" />

                </div>
                <div className="flex flex-col gap-2 text-sm font-semibold  justify-center italic  w-2/3">
                    <p className='font-semibold text-lg text-primary underline underline-offset-2'>Guru Seva Thali</p>
                    <p>Sharing the divine mindset of ‘Service’ and ‘Giving Back to Society, Oye Kake have introduced Guru Seva Thali every Thursday, to raise meals for the needy. At a minimal rate of 649 Rs + taxes, one can enjoy the delicious flavours of the north and the delight of feeding the stomach of the deserving.
                        The ustaads at Oye Kake prepare the dishes with the utmost love to earn a place in the guest’s heart. The founder has proactively joined hands with various NGOs across the city to feed the needy, Oye Kake serves the unlimited thali with the aim to start a chain where people can keep adding to the effort and ambition. Curating a special menu by carefully undertaking extensive research the team at Oye Kake revisits the ‘breadbasket of India’, the place where it all started Eleven years ago; allowing the patrons to experience and taste the food in its most authentic and evolved self. With each Thali served, a meal is donated to those in need.
                        To keep up with the campaign a display board is hoisted with numbers of Thalis sold for patrons to see and help in meeting the day’s goal. Currently the Seva Thali is served every Thursday at the Lower Parel (Kamala Mill) and Ghatkopar (RCity) outlets.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs

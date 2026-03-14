"use client"

import { PageFlip } from "page-flip"
import { useEffect, useRef } from "react"
import { OrnatePageBorder } from "../../components/border/OrnateBorder"
import { menuData } from "@/components/data/constant"
export default function MenuBook() {
    const bookRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!bookRef.current) return

        const pageFlip = new PageFlip(bookRef.current, {
            width: 450,
            height: 600,
            size: "stretch",
            minWidth: 350,
            maxWidth: 600,
            minHeight: 500,
            maxHeight: 700,
            showCover: true,
            maxShadowOpacity: 0.5,
            mobileScrollSupport: false,
            clickEventForward: true,

        })

        const pages = document.querySelectorAll<HTMLElement>(".page")
        pageFlip.loadFromHTML(pages)
    }, [])
    const pages = [...menuData]

    if (pages.length % 2 !== 0) {
        pages.push({ title: "", items: [] })
    }
    return (


        <div className="relative w-full! h-125">
            <div
                ref={bookRef}
                className="ps-30 overflow-hidden   h-150 w-full!"
            >
                {/* Cover */}

                <div className="page h-full bg-black  rounded-sm  flex flex-col items-center justify-center px-4">
                    <OrnatePageBorder />
                    <div className="flex flex-col border justify-center items-center h-full">
                        <div className="text-[#C5973A] font-mono text-xs tracking-[0.3em] mb-4">
                            ━━━ EST. 2015 ━━━
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-bold text-[#C5973A] mb-2 font-sans tracking-wider">
                            OYE KAKE
                        </h1>
                        <div className="w-32 h-0.5 bg-[#C5973A] mx-auto my-4" />
                        <p className="text-[#C5973A]/80 text-sm sm:text-base tracking-widest font-mono">
                            MENU
                        </p>
                        <p className="text-[#C5973A]/60 text-xs mt-4 tracking-wider">
                            100% Love • 100% Veg
                        </p>
                    </div>
                </div>



                {/* Page 1 */}
                {pages?.map((menuUnit) => {
                    return (

                        <div className="page bg-black text-[#ffd900c1] px-8 pt-8 rounded-sm" key={menuUnit.title}>
                            <OrnatePageBorder />

                            <h2 className="text-2xl font-bold mb-4">{menuUnit?.title}</h2>
                            <div className="flex flex-col gap-2 h-[calc(100vh-230px)] overflow-auto no-scrollbar">

                                {menuUnit?.items?.map((mUnit) => {
                                    return (
                                        <div className="flex justify-between space-y-3 tet-xs" key={mUnit?.name}>

                                            <p>{mUnit?.name}</p>
                                            <p>{mUnit?.price}</p>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    )
                })}







            </div >
        </div>
    )
}
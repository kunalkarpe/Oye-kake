const OrnatePageBorder = () => {
    return (
        <div className="absolute inset-3 pointer-events-none z-10 r w-106">
            {/* Outer gold border */}
            <div className="absolute inset-0 border border-[#C5973A]/50 rounded-sm" />
            {/* Inner gold border */}
            <div className="absolute inset-2.5 border border-[#C5973A]/25 rounded-sm" />
            {/* Corner accents */}
            {[
                { t: true, l: true, cls: "top-0 left-0 border-t-2 border-l-2 rounded-tl-sm" },
                { t: true, l: false, cls: "top-0 right-0 border-t-2 border-r-2 rounded-tr-sm" },
                { t: false, l: true, cls: "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-sm" },
                { t: false, l: false, cls: "bottom-0 right-0 border-b-2 border-r-2 rounded-br-sm" },
            ].map((c, i) => (
                <div
                    key={i}
                    className={`absolute ${c.t ? "top-0" : "bottom-0"} ${c.l ? "left-0" : "right-0"} w-5 h-5`}
                >
                    <div className={`absolute w-4 h-4 border-[#C5973A]/60 ${c.cls}`} />
                </div>
            ))}
            {/* Top decorative divider */}
            <div className="absolute top-4 left-6 right-6 flex items-center gap-2">
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#C5973A]/30 to-transparent" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#C5973A]/40" />
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#C5973A]/30 to-transparent" />
            </div>
            {/* Bottom decorative divider */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center gap-2">
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#C5973A]/30 to-transparent" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#C5973A]/40" />
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#C5973A]/30 to-transparent" />
            </div>
        </div>
    )
}
export { OrnatePageBorder }
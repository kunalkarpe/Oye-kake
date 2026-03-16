"use client"
import { motion, AnimatePresence } from "framer-motion";

const CHAIR_VARIANTS = {
    initial: { opacity: 0, scale: 0.5, y: 5 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 400, damping: 25 } },
    exit: { opacity: 0, scale: 0.5, y: 5, transition: { duration: 0.15 } },
};

const rotation = {
    up: "rotate-0",
    down: "rotate-180",
    left: "-rotate-90",
    right: "rotate-90",
};

const Chair = ({ direction }: { direction: "up" | "down" | "left" | "right" }) => {
    const isUp = direction === "up";

    return (
        <div className={`flex flex-col items-center ${rotation[direction]}`}>
            <div
                className="w-11 h-3 bg-foreground/80"
                style={{
                    boxShadow: isUp
                        ? "0 -2px 4px rgba(0,0,0,.25)"
                        : "0 2px 4px rgba(0,0,0,.25)",
                }}
            />

            <div
                className="relative w-12 h-9 rounded-lg border border-foreground/15"
                style={{
                    background:
                        "linear-gradient(135deg, hsl(var(--foreground)/0.35), hsl(var(--foreground)/0.55))",
                    boxShadow:
                        "inset 0 2px 5px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.15)",
                }}
            >
                <div className="absolute inset-1 rounded-md bg-foreground/15 border border-foreground/10" />

                <div className="absolute w-1 h-1 bg-foreground/80 rounded-full top-0 left-0" />
                <div className="absolute w-1 h-1 bg-foreground/80 rounded-full top-0 right-0" />
                <div className="absolute w-1 h-1 bg-foreground/80 rounded-full bottom-0 left-0" />
                <div className="absolute w-1 h-1 bg-foreground/80 rounded-full bottom-0 right-0" />
            </div>
        </div>
    );
};

interface TableVisualProps {
    seats: number[];
}

const OrderTable = ({ seats }: TableVisualProps) => {
    const tableWidth = Math.max(160, seats.length * 60);
    const topSeats: number[] = [];
    const bottomSeats: number[] = [];
    const leftSeats: number[] = [];
    const rightSeats: number[] = [];

    seats.forEach((seat, index) => {
        const position = index + 1;

        if (position === 1) topSeats.push(seat);
        else if (position === 2) bottomSeats.push(seat);
        else if (position === 3) leftSeats.push(seat);
        else if (position === 4) rightSeats.push(seat);
        else {
            if (position % 2 !== 0) topSeats.push(seat);
            else bottomSeats.push(seat);
        }
    });

    const Dish = () => (
        <div className="w-7 h-7 rounded-full  bg-white flex items-center justify-center">
            <div className="w-4 h-4 rounded-full ring-1 ring-primary/60" />
        </div>
    );

    return (
        <div className="flex flex-col items-center gap-4">

            {/* TOP CHAIRS */}
            <div className="flex justify-center gap-3">
                <AnimatePresence>
                    {topSeats.map((id) => (
                        <motion.div key={id} variants={CHAIR_VARIANTS} initial="initial" animate="animate" exit="exit" layout>
                            <Chair direction="up" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>




            {/* MIDDLE */}
            <div className="flex items-center gap-6">

                {/* LEFT CHAIRS */}
                <div className="flex flex-col gap-3">
                    <AnimatePresence>
                        {leftSeats.map((id) => (
                            <motion.div key={id} variants={CHAIR_VARIANTS} initial="initial" animate="animate" exit="exit" layout>
                                <Chair direction="left" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* TABLE */}
                <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative rounded-md bg-primary  px-12 py-10 flex items-center justify-center min-w-44 max-w-80  gap-4 h-28"
                    style={{ width: tableWidth }}
                >
                    <div className="absolute inset-2 rounded-xl border border-white/50 pointer-events-none" />

                    {/* TOP DISHES */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-3">
                        {topSeats.map((id) => (
                            <Dish key={id} />
                        ))}
                    </div>

                    {/* BOTTOM DISHES */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                        {bottomSeats.map((id) => (
                            <Dish key={id} />
                        ))}
                    </div>

                    {/* LEFT DISHES */}
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 -translate-x-1/2">
                        {leftSeats.map((id) => (
                            <Dish key={id} />
                        ))}
                    </div>

                    {/* RIGHT DISHES */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 translate-x-1/2">
                        {rightSeats.map((id) => (
                            <Dish key={id} />
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT CHAIRS */}
                <div className="flex flex-col gap-3">
                    <AnimatePresence>
                        {rightSeats.map((id) => (
                            <motion.div key={id} variants={CHAIR_VARIANTS} initial="initial" animate="animate" exit="exit" layout>
                                <Chair direction="right" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>




            {/* BOTTOM CHAIRS */}
            <div className="flex justify-center gap-3">
                <AnimatePresence>
                    {bottomSeats.map((id) => (
                        <motion.div key={id} variants={CHAIR_VARIANTS} initial="initial" animate="animate" exit="exit" layout>
                            <Chair direction="down" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

        </div>
    );
};

export default OrderTable;
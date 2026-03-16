"use client"

import { useState } from "react";
import { motion } from "motion/react"
import { Minus, Plus } from "lucide-react";
import OrderTable from "@/components/order-table/OrderTable";
const Reservation = () => {
    const [seats, setSeats] = useState<number[]>([1, 2, 3])
    const addSeat = () => {
        if (seats.length >= 10) return;
        setSeats([...seats, Date.now()]);
    };

    const removeSeat = () => {
        if (seats.length <= 1) return;
        setSeats(seats.slice(0, -1));
    };
    const handleReservation = () => {
        const data = {
            name: "XAH",
            guests: "3",
            date: "Nov 12",
            time: "12 pm",
            location: "Gahtkopar"
        }
        const message = `
New Reservation 🍽️
Name: ${data.name}
Guests: ${data.guests}
Date: ${data.date}
Time: ${data.time}
Location: ${data.location}
  `;

        const url = `https://wa.me/917021018320?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };
    return (
        <div>
            Hey form reservation
            <div className="flex h-full justify-center w-full">
                <OrderTable seats={seats} />
            </div>
            <div className="flex items-center gap-2">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={removeSeat}
                    disabled={seats.length <= 1}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary transition-colors disabled:opacity-30"
                >
                    <Minus className="w-4 h-4" />
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={addSeat}
                    disabled={seats.length >= 10}
                    className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:opacity-90 transition-opacity disabled:opacity-30"
                >
                    <Plus className="w-4 h-4" />
                </motion.button>
            </div>
            <button type="button" onClick={handleReservation} className="ring-1 ring-primary w-44 h-8 cursor-pointer" >Send data</button>
        </div>
    )
}

export default Reservation

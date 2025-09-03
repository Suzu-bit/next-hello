"use client"

import React, { useState } from "react";
import Counter from "../components/Counter";

export default function Page() {
    const [counters, setCounters] = useState<number[]>([0]);

    const handleAdd = () => {
        setCounters([...counters, counters.length]); // 新しいIDを追加
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-pink-200 via-white to-green-200 flex flex-col justify-start items-center pt-10 p-6">
            <h1 className="font-bold text-3xl text-center mb-6">Counter List</h1>

            <div className="flex justify-center mb-6">
                <button
                    onClick={handleAdd}
                    className="bg-green-300 hover:bg-pink-300 text-white font-semibold px-6 py-2 rounded-xl shadow"
                >
                    Add Counter
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {counters.map((id) => (
                    <Counter key={id} />
                ))}
            </div>
        </main>
    );
}
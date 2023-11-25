"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

import { lato } from "@/styles/fonts/fonts";

export default function Contato() {
    const [message, setMessage] = useState("");

    function handleMessage(e) {
        e.preventDefault();

        const linkWhats = `https://wa.me/5582999821904/?text=${message}`;

        window.open(linkWhats);
        setMessage("");
    }

    return (
        <section
            id="contato"
            className="bg-zinc-900 flex flex-col items-center h-[600px] justify-evenly"
        >
            <div>
                <h1
                    className={`${lato.className} text-3xl font-black text-white`}
                >
                    Contato
                </h1>
                <div className="w-28 h-[3px] bg-c_purpleC" />
            </div>
            <div className="w-5/6 border border-white p-3 rounded flex flex-col items-center justify-center gap-3 bg-transparent">
                <textarea
                    className="h-[200px] w-full bg-transparent p-3 border border- rounded text-white resize-none"
                    placeholder="Mensagem"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    onClick={handleMessage}
                    className="bg-c_purpleC px-5 py-2 text-xl w-full text-white rounded flex items-center justify-center gap-2"
                >
                    Enviar
                    <FaWhatsapp className="text-2xl" />
                </button>
            </div>
        </section>
    );
}

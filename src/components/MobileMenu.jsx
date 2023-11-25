"use client";

import { useState } from "react";
import { FaHouse, FaBookOpen, FaHammer, FaSquarePhone } from "react-icons/fa6";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={toggleMenu} className="block text-c_purpleC">
                <svg
                    className="w-6  sm:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    )}
                </svg>
            </button>
            <div
                className={`${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } fixed top-0 right-0 h-full w-2/3 bg-c_black text-c_purpleC text-xl transition-transform ease-in-out duration-300 -z-10 flex justify-center   xs:w-2/4   sm:w-1/3`}
            >
                <div className="flex flex-col gap-10 mt-24">
                    <li className="flex gap-5 items-center">
                        <FaHouse />
                        <a href="#home" onClick={closeMenu}>
                            Home
                        </a>
                    </li>
                    <li className="flex gap-5 items-center">
                        <FaBookOpen />
                        <a href="#sobre" onClick={closeMenu}>
                            Sobre nós
                        </a>
                    </li>
                    <li className="flex gap-5 items-center">
                        <FaHammer />
                        <a href="#servicos" onClick={closeMenu}>
                            Serviços
                        </a>
                    </li>
                    <li className="flex gap-5 items-center">
                        <FaSquarePhone />
                        <a href="#contato" onClick={closeMenu}>
                            Contato
                        </a>
                    </li>
                </div>
            </div>
        </div>
    );
}

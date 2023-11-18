"use client";

import { useState } from "react";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleMenu} className="block text-gray-500">
                <svg
                    className="h-6 w-6"
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
                } fixed top-0 right-0 h-full w-2/3 bg-gray-800 text-white transition-transform ease-in-out duration-300 -z-10`}
            >
                <div className="p-4">
                    <a href="#" className="block py-2">
                        Item 1
                    </a>
                    <a href="#" className="block py-2">
                        Item 2
                    </a>
                    <a href="#" className="block py-2">
                        Item 3
                    </a>
                </div>
            </div>
        </div>
    );
}

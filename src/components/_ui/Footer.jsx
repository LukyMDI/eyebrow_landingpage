import Image from "next/image";
import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";

import c_total from "../../../public/images/c_total.webp";

export default function Footer() {
    return (
        <footer className="p-3 bg-gray-900 flex flex-col items-center gap-2">
            <div className="col-span-1 my-2 w-20">
                <Image
                    src={c_total}
                    quality={100}
                    priority={true}
                    alt="Logo do Studio"
                />
            </div>
            <div className="text-c_purpleC text-3xl flex w-full justify-center gap-1 mb-3">
                <a href="https://wa.me/5582999821904/" target="_blank">
                    <FaSquareWhatsapp />
                </a>
                <a
                    href="https://www.instagram.com/studiocamilequatrin/"
                    target="_blank"
                >
                    <FaSquareInstagram />
                </a>
            </div>
            <span className="text-[0.650rem] text-gray-500">
                &copy;{new Date().getFullYear()} Studio Camile Quatrin. Todos os
                direitos reservados
            </span>
        </footer>
    );
}

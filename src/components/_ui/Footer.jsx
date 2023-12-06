import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaLocationDot } from "react-icons/fa6";

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
            <div className="text-black text-3xl flex w-full justify-center gap-2 mb-3">
                <a
                    href="https://wa.me/5582999821904/"
                    target="_blank"
                    className="bg-c_purpleC text-black flex justify-center rounded"
                >
                    <FaWhatsapp className="w-4/6" />
                </a>
                <a
                    href="https://www.instagram.com/studiocamilequatrin/"
                    target="_blank"
                    className="bg-c_purpleC text-black flex justify-center rounded"
                >
                    <FaInstagram className="w-4/6" />
                </a>
                <a
                    href="https://www.google.com/maps/dir//Studio+Camile+Quatrin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x7067f8639229fc7:0x2afa4f633fee04c?sa=X&ved=2ahUKEwjise6v8fmCAxWGqJUCHQ-fAEUQ9Rd6BAg-EAA&hl=pt-BR"
                    target="_blank"
                    className="bg-c_purpleC text-black flex justify-center rounded"
                >
                    <FaLocationDot className="w-7/12" />
                </a>
            </div>
            <span className="text-[0.650rem] text-gray-500">
                &copy;{new Date().getFullYear()} Studio Camile Quatrin. Todos os
                direitos reservados
            </span>
        </footer>
    );
}

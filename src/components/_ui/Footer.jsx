import Image from "next/image";
import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";

import c_total from "../../../public/images/c_total.webp";

export default function Footer() {
    return (
        <footer className="p-3 bg-gray-900 flex flex-col items-center gap-2">
            <div className="col-span-1 my-2 w-20">
                <Image src={c_total} quality={100} priority={true} />
            </div>
            <div className="text-c_purpleC text-xl flex w-full justify-center gap-1 mb-3">
                <FaSquareWhatsapp />
                <FaSquareInstagram />
            </div>
            <span className="text-[0.650rem] text-gray-500">
                &copy;{new Date().getFullYear()} Studio Camile Quatrin. Todos os
                direitos reservados
            </span>
        </footer>
    );
}
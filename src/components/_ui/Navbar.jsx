import Image from "next/image";

// Components
import MobileMenu from "../MobileMenu";

// Imagens
import c_total from "../../../public/images/c_total.webp";

export default function Navbar() {
    return (
        <header className="w-full fixed grid grid-cols-2 z-10 items-center">
            <div className="col-span-1 my-2 ml-5 w-20   lg:w-28">
                <a href="/">
                    <Image
                        src={c_total}
                        quality={100}
                        priority={true}
                        alt="Logo do Studio"
                    />
                </a>
            </div>
            <div className="col-span-1 md:hidden justify-self-end mr-10 z-10">
                <MobileMenu />
            </div>
            <nav className="hidden md:col-span-1 md:flex flex-row justify-end items-center gap-3 pr-8 text-white    lg:text-xl      xl:text-2xl">
                <ul className="flex flex-row gap-6">
                    <li className="li-nav">
                        <a href="#">Home</a>
                    </li>
                    <li className="li-nav">
                        <a href="#sobre">Sobre nós</a>
                    </li>
                    <li className="li-nav">
                        <a href="#servicos">Serviços</a>
                    </li>
                    <li className="li-nav">
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
            </nav>
            <div className="hidden flex-row gap-5 text-white">
                <span>w</span>
                <span>i</span>
            </div>
        </header>
    );
}

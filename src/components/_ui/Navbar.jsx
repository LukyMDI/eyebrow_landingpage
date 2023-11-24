import Image from "next/image";

// Components
import MobileMenu from "../MobileMenu";

// Imagens
import c_total from "../../../public/images/c_total.webp";

export default function Navbar() {
    return (
        <header className="w-full fixed grid grid-cols-2 z-10 items-center">
            <div className="col-span-1 my-2 ml-5 w-20">
                <a href="/">
                    <Image src={c_total} quality={100} priority={true} />
                </a>
            </div>
            <div className="col-span-1 sm:hidden justify-self-end mr-10 z-10">
                <MobileMenu />
            </div>
            <nav className="hidden sm:col-span-1 sm:flex flex-row justify-end items-center gap-3 pr-4">
                <ul className="flex flex-row gap-3">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre nós</a>
                    </li>
                    <li>
                        <a href="#servicos">Serviços</a>
                    </li>
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
            </nav>
            <div className="hidden sm:flex flex-row gap-5">
                <span>w</span>
                <span>i</span>
            </div>
        </header>
    );
}

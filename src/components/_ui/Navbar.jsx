import Image from "next/image";

// Imagens
import c_250 from "../../../public/images/c_250.webp";

export default function Navbar() {
    return (
        <header className="w-full text-white fixed flex flex-row items-center justify-around">
            <div>
                <Image src={c_250} quality={100} width={70} />
            </div>
            <nav className="w-100">
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
            <div className="flex flex-row gap-5">
                <span>w</span>
                <span>i</span>
            </div>
        </header>
    );
}

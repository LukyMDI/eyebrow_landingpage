export default function Navbar() {
    return (
        <header>
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
        </header>
    );
}

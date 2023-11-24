"use client";

import Link from "next/link";

export default function Contato() {
    const linkWhats =
        "https://wa.me/5582996910363/?text=funcionou corretamente";

    const openWhatsappChat = () => {
        window.open(linkWhats, "whatsapp", "width=400, height=600");
    };

    return (
        <section id="contato" className="bg-c_purple">
            <div>
                <h1>CONTATO</h1>
                <Link href={linkWhats}>Clique</Link>
                <button onClick={openWhatsappChat}>Clique</button>
            </div>
        </section>
    );
}

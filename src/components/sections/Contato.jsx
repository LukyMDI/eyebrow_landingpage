import Link from "next/link";

export default function Contato() {
    const linkWhats = "https://wa.me/5582996910363/?text=textourl";

    return (
        <section
            id="contato"
            className="bg-c_purple flex flex-col items-center"
        >
            <div>
                <h1>CONTATO</h1>
                <a
                    href={linkWhats}
                    target="_blank"
                    className="bg-green-600 text-white p-3 rounded"
                >
                    Clique Aqui senhor
                </a>
            </div>
        </section>
    );
}

import Image from "next/image";

import eyebrow_2 from "../../../public/images/eyebrow_2.webp";

import { lato } from "@/styles/fonts/fonts";

export default function SobreNos() {
    return (
        <>
            <section
                id="sobre"
                className="bg-zinc-900 w-full h-screen flex flex-col items-center justify-evenly"
            >
                <div>
                    <h1
                        className={`${lato.className} text-white text-2xl font-black    md:text-4xl    lg:text-5xl`}
                    >
                        Sobre Nós
                    </h1>
                    <div className="w-16 h-[3px] bg-c_purpleC   lg:w-32" />
                </div>
                <div className="flex flex-col items-center w-full">
                    <div className="relative top-6 flex justify-center     lg:top-12">
                        <Image
                            src={eyebrow_2}
                            priority={true}
                            placeholder="blur"
                            quality={100}
                            alt="Imagem de uma modelo fazendo sua sobrancelha"
                            className="rounded-md object-cover w-2/6    md:w-3/12"
                        />
                    </div>
                    <div className="bg-c_purpleC p-5 w-11/12 text-white rounded-md    md:w-8/12    lg:w-10/12 lg:text-2xl lg:p-10">
                        <p className="mt-5">
                            Olá! Eu sou <strong>Camile Quatrin</strong>, a mente
                            criativa por trás do{" "}
                            <strong>Studio Camile Quatrin</strong>. Minha
                            jornada começou com uma paixão pela beleza e a arte
                            de realçar a expressão única de cada pessoa através
                            das sobrancelhas. Aqui, não se trata apenas de
                            transformar sobrancelhas, mas de elevar a confiança
                            e revelar a verdadeira beleza individual. Estou
                            comprometida em oferecer um serviço personalizado,
                            dedicado a cada cliente, garantindo não apenas
                            sobrancelhas impecáveis, mas também uma experiência
                            que inspira confiança e autoestima. Venha descobrir
                            como suas sobrancelhas podem contar a{" "}
                            <strong>sua história</strong>.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

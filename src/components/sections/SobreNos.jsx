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
                        className={`${lato.className} text-white text-2xl font-black`}
                    >
                        Sobre Nós
                    </h1>
                    <div className="w-16 h-[3px] bg-c_purpleC" />
                </div>
                <div className="flex flex-col items-center w-full">
                    <div className="relative top-6">
                        <Image
                            src={eyebrow_2}
                            priority={true}
                            objectFit="cover"
                            placeholder="blur"
                            quality={100}
                            layout="responsive"
                            sizes="50vw"
                            className="rounded-md"
                        />
                    </div>
                    <div className="bg-c_purpleC p-5 w-11/12 text-white rounded-md">
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

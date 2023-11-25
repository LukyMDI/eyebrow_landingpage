import Image from "next/image";

import modelo_1 from "../../../public/images/eyebrow_1.webp";
import { lato } from "@/styles/fonts/fonts";

export default function Home() {
    return (
        <>
            <section
                id="home"
                className="bg-[url('../../public/images/bg-1.webp')] bg-cover bg-no-repeat w-full h-screen flex flex-col items-center"
            >
                <div
                    className={`${lato.className} flex font-playfair flex-col items-center text-white font-black text-3xl self-center mt-32   md:text-5xl`}
                >
                    <h1 className="text-lg   md:text-2xl">
                        REALÇANDO A BELEZA
                    </h1>
                    <h1 className="border-b-4 border-c_purpleC">
                        DO SEU OLHAR
                    </h1>
                </div>
                <div className="flex flex-col grow justify-evenly   md:flex-row md:mt-36">
                    <div className="w-full h-1/5 flex justify-center z-0   sm:h-1/4   md:h-3/6 md:translate-x-8 md:z-[1]">
                        <div className="relative w-5/6 border-4 border-solid border-c_purpleC rounded-md   xs:w-4/6   md:w-5/6 md:rounded-none">
                            <Image
                                src={modelo_1}
                                fill
                                quality={100}
                                priority={true}
                                className="object-cover"
                                alt="Imagem de uma modelo fazendo a sobrancelha"
                            />
                        </div>
                    </div>
                    <div className="border-4 rounded-md border-white w-11/12 bg-black/70 p-5 overflow-auto box-border   xs:w-9/12   sm:p-10   md:w-5/6 md:h-3/6 md:-translate-x-8 md:translate-y-36 md:rounded-none">
                        <div
                            className={`${lato.className} text-white text-center font-black text-lg`}
                        >
                            <h1>STUDIO</h1>
                            <h1>CAMILE QUATRIN</h1>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3 mt-1">
                            <div className="w-16 rounded-full bg-gray-500 h-[3px]" />
                            <span className="text-c_purpleC font-black">
                                Since 2023
                            </span>
                            <div className="w-16 rounded-full bg-gray-500 h-[3px]" />
                        </div>
                        <div className="text-white text-justify mt-3">
                            <p>
                                Transforme o olhar, eleve a confiança. Descubra
                                o poder de sobrancelhas perfeitamente moldadas e
                                desenhadas sob medida para você. Deixe minha
                                paixão pela arte das sobrancelhas realçar sua
                                beleza única.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
